import Head from "next/head"
import { FaUserPlus } from 'react-icons/fa'
import Link from "next/link"
import { Loader } from "../../components"
import { Swal } from '../../lib/index.mjs'
import { useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
export default function CreateAccount() {
    const [parent] = useAutoAnimate()
    const [account, setAccount] = useState({
        loaderOpened: false,
        username: undefined,
        password: undefined,
        email: undefined
    })
    const create = async () => {
        try {
            setAccount({ ...account, loaderOpened: true })
            await fetch('/api/user/create-account', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account),
                method: 'POST'
            }).then(async (req) => {
                if (req.ok) {
                    const { status, title, msg } = await req.json()
                    setAccount({ ...account, loaderOpened: false })
                } else {
                    throw new Error(`${req.status} ${req.statusText}`)
                }
            }).catch((e: Error) => {
                throw new Error(e.message)
            })
        } catch (e) {
            setAccount({ ...account, loaderOpened: false })
            Swal.fire({
                toast: true,
                timer: 3000,
                position: 'bottom-left',
                icon: 'error',
                text: e.message,
                showConfirmButton: false,
                showClass: {
                    popup: 'animate__animated animate__fadeInUp ms-300'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown ms-300'
                }
            })
        }
    }
    return (
        <>
            <Head>
                <title>Create Account</title>
            </Head>
            <div className="fixed flex justify-center items-center h-screen w-screen p-8">
                <div className="w-full md:w-[400px] bg-zinc-900 px-5 py-10 rounded-lg shadow-lg">
                    <div className='flex  justify-center items-center'>
                        <FaUserPlus
                            className="h-36 w-36 text-teamdao-primary" />
                    </div>
                    <div className='flex flex-col gap-3.5 px-4 mt-8'>
                        <input
                            type={'text'}
                            className="transition-all w-full px-3 py-2.5 rounded-lg shadow-lg bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teamdao-primary text-zinc-300"
                            placeholder='Username' />
                        <input
                            type={'email'}
                            className="transition-all w-full px-3 py-2.5 rounded-lg shadow-lg bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teamdao-primary text-zinc-300"
                            placeholder='Email' />
                        <input
                            type={'password'}
                            className="transition-all w-full px-3 py-2.5 rounded-lg shadow-lg bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teamdao-primary text-zinc-300"
                            placeholder='Password' />
                        <button
                            onClick={create}
                            className='bg-teamdao-primary p-2 rounded-lg text-black text-base font-semibold tracking-wider focus:ring-1 focus:ring-teamdao-primary'>Sign Up</button>
                    </div>
                    <hr className='mx-4 my-5 border-zinc-500' />
                    <div className='flex justify-between items-center px-4 py-1'>
                        <Link href={'/auth'}>
                            <a className='text-teamdao-primary text-sm transition-all hover:underline'>Login Your Account</a>
                        </Link>
                        <Link href={'/auth/forgot-password'}>
                            <a className='text-red-600 text-sm transition-all hover:underline'>Forgot Password?</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div ref={parent}>
                {account.loaderOpened && <Loader />}
            </div>
        </>
    )
}