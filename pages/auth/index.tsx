import Head from 'next/head'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
export default function Auth() {
    return (
        <>
            <Head>
                <title>Login Your Account</title>
            </Head>
            <div className=" fixed flex justify-center items-center h-screen w-screen p-8">
                <div className="w-full md:w-[400px] bg-zinc-900 px-5 py-10 rounded-lg shadow-lg">
                    <div className='flex  justify-center items-center'>
                        <FaUserCircle
                            className="h-36 w-36 text-teamdao-primary" />
                    </div>
                    <div className='flex flex-col gap-3.5 px-4 mt-8'>
                        <input
                            type={'text'}
                            className="transition-all w-full px-3 py-2.5 rounded-lg shadow-lg bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teamdao-primary text-zinc-300"
                            placeholder='Username' />
                        <input
                            type={'password'}
                            className="transition-all w-full px-3 py-2.5 rounded-lg shadow-lg bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teamdao-primary text-zinc-300"
                            placeholder='Password' />
                        <button className='bg-teamdao-primary p-2rounded-lg text-black text-base font-semibold tracking-wider focus:ring-1 focus:ring-teamdao-primary'>Login</button>
                    </div>
                    <hr className='mx-4 my-5 border-zinc-500' />
                    <div className='flex justify-between items-center px-4 py-1'>
                        <Link href={'/auth/create-account'}>
                            <a className='text-teamdao-primary text-sm transition-all hover:underline'>Create Account</a>
                        </Link>
                        <Link href={'/auth/forgot-password'}>
                            <a className='text-red-600 text-sm transition-all hover:underline'>Forgot Password?</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}