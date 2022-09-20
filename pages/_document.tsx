import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html lang='en' className='dark scroll-smooth'>
            <Head />
            <body className='bg-[url(/assets/images/bgn.jpg)] bg-no-repeat bg-cover h-screen w-screen overflow-hidden'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}