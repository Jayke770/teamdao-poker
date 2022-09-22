import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { ws } from '../lib/index.mjs'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { getSession, } from 'next-auth/react'
import type { GetServerSideProps, NextPage } from 'next'
export default function Home() {
  const socket = useContext(ws)
  const [parent] = useAutoAnimate()
  const [join_or_create, setJoinorCreate] = useState({
    type: 'join',
    id: undefined,
    opened: false
  })
  return (
    <>
      <Head>
        <title>Poker</title>
      </Head>
      {/* poker table */}
      <div className='flex justify-center items-center p-5 h-screen w-screen'>
        <div
          className='relative w-[80vw] h-60 md:w-[50vw] md:h-[350px] rounded-[200px] bg-black p-8 shadow-2xl'>
          <div className='bg-teal-700 rounded-[200px] h-full w-full shadow-[inset_5px_10px_18px_0_rgb(0_0_0_/_75%)]'>
            {/* Players */}
            <div className='grid grid-cols-3 -top-8 md:-top-10 left-0 absolute w-full place-items-center'>
              <div className='player bg-amber-800'>
                <button
                  onClick={() => setJoinorCreate({ ...join_or_create, opened: true })}>fasf</button>
              </div>
              <div className='player bg-pink-800' />
              <div className='player bg-zinc-800' />
            </div>
            <div className='flex justify-between items-center absolute left-0 h-full top-0 w-full'>
              <div className='player bg-gray-800 -ml-10' />
              <div className='player bg-blue-800 -mr-10' />
            </div>
            <div className='grid grid-cols-3 -bottom-8 md:-bottom-10 left-0 absolute w-full place-items-center'>
              <div className='player bg-red-800' />
              <div className='player bg-emerald-800' />
              <div className='player bg-rose-800' />
            </div>
          </div>
        </div>
      </div>
      {/* join or create room */}
      <div ref={parent}>
        {join_or_create.opened && (
          <div
            onClick={(e) => e.target.classList.contains('main_join_or_create') && setJoinorCreate({ ...join_or_create, opened: false })}
            className='main_join_or_create fixed flex justify-center items-center h-screen w-screen bg-black/80 z-50 top-0 p-5'>
            <div
              className='w-full md:w-[400px] bg-zinc-900 p-5 rounded-lg shadow-lg'>
              <div className='text-white text-xl font-bold'>
                Join or Create Room
              </div>
              <div className='grid grid-cols-2 mt-5'>
                <button
                  onClick={() => setJoinorCreate({ ...join_or_create, type: 'join' })}
                  className={`${join_or_create.type === 'join' && 'bg-blue-500'} transition-all p-2 text-white border border-r-0 rounded-tl-lg rounded-bl-lg border-blue-500 text-lg`}>Join Room</button>
                <button
                  onClick={() => setJoinorCreate({ ...join_or_create, type: 'create' })}
                  className={`${join_or_create.type === 'create' && 'bg-blue-500'} transition-all p-2 text-white py-2.5 border rounded-tr-lg rounded-br-lg border-blue-500 text-lg`}>Create Room</button>
              </div>
              <div
                ref={parent}
                className='flex flex-col gap-5 mt-5'>
                {join_or_create.type === 'join' && (
                  <>
                    <input
                      type={'text'}
                      className="py-3 px-4 rounded-lg shadow-lg bg-zinc-800 transition-all outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-zinc-800 text-white"
                      placeholder='Room ID' />
                    <button className='bg-blue-600 px-2 py-2.5 rounded-lg text-zinc-300 text-lg font-semibold tracking-wider'>Join</button>
                  </>
                )}
                {join_or_create.type === 'create' && (
                  <>
                    <input
                      type={'text'}
                      className="py-3 px-4 rounded-lg shadow-lg bg-zinc-800 transition-all outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-zinc-800 text-white"
                      placeholder='Room ID' />
                    <button className='bg-blue-600 px-2 py-2.5 rounded-lg text-zinc-300 text-lg font-semibold tracking-wider'>Create</button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const isLogged = await getSession(context)
  console.log(isLogged)
  if (isLogged) {
    return {
      props: {}
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: '/auth'
      }
    }
  }
}