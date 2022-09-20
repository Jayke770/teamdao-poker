import express from 'express'
import next from 'next'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { poker } from './lib/index.mjs'
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
await app.prepare()
const server = express()
const httpServer = createServer(server)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXTAUTH_URL
  }
})
server.all('*', (req, res) => {
  return handle(req, res)
})
io.on('connection', (socket) => {
  console.log("New User Connected", socket.id)
  socket.on('hi', (data) => {
    io.to(socket.id).emit('chat message', 'Your message')
  })
})
httpServer.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
})