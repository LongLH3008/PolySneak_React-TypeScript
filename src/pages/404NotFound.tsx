import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const ErrorPage = (props: Props) => {
    return (
        <div className='w-100 h-screen flex justify-start items-center p-48'>
            <h1 className='text-7xl font-semibold'>
                404 <br />
                <p className='text-4xl'>Oops !, Not Found ...</p>
                <br />
                <Link
                    className='text-xl px-4 py-2 border shadow-xl overflow-hidden border-solid hover:bg-zinc-700 hover:text-white'
                    to='/'
                >
                    Back to home
                </Link>
            </h1>
        </div>
    )
}

export default ErrorPage
