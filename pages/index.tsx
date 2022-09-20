import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { ws } from '../lib/index.mjs'
export default function Home() {
  const socket = useContext(ws)
  useEffect(() => {
    socket.on('chat message', (res) => {
      console.log(res)
    })
    return () => {
      socket.off('chat message')
    }
  }, [])
  const send = () => {
    socket.emit('hi')
  }
  return (
    <>
      <Head>
        <title>Poker</title>
      </Head>
      {/* poker table */}
      <div className='flex justify-center items-center p-5 h-screen w-screen'>
        <div
          className='relative w-screen h-80 md:w-[50vw] md:h-[350px] rounded-[200px] bg-black p-8 shadow-2xl'>
          <div className='bg-teal-700 rounded-[200px] h-full w-full shadow-[inset_5px_10px_18px_0_rgb(0_0_0_/_75%)]'>
            {/* Players */}
            <div className='grid grid-cols-3 -top-10 left-0 absolute w-full place-items-center'>
              <div className='h-28 w-28 bg-amber-800 rounded-full' />
              <div className='h-28 w-28 bg-pink-800 rounded-full' />
              <div className='h-28 w-28 bg-zinc-800 rounded-full' />
            </div>
            <div className='flex justify-between items-center absolute left-0 h-full top-0 w-full'>
              <div className='h-28 w-28 bg-gray-800 rounded-full -ml-10' />
              <div className='h-28 w-28 bg-blue-800 rounded-full -mr-10' />
            </div>
            <div className='grid grid-cols-3 -bottom-10 left-0 absolute w-full place-items-center'>
              <div className='h-28 w-28 bg-red-800 rounded-full' />
              <div className='h-28 w-28 bg-emerald-800 rounded-full' />
              <div className='h-28 w-28 bg-rose-800 rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}