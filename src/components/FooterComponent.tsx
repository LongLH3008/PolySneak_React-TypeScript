import React from 'react'
import logo from '../assets/logo.png'

type Props = {}

const FooterComponent = (props: Props) => {
    return (
        <section id='footer' className='mt-20 px-48 w-full bg-gradient-to-tl from-zinc-500 to-zinc-800 p-20 text-white'>
            <div className='flex justify-between mt-20'>
                <ul className='grid grid-rows-3 gap-5'>
                    <li>
                        <img width='80px' src={logo} alt='' />
                    </li>
                    <li>
                        <h1 className='mt-2 text-3xl font-bold'>PolySneak</h1>
                    </li>
                </ul>
                <ul className='grid grid-rows-3 gap-5'>
                    <li className='font-bold text-orange-400 mb-5 text-2xl'>Links</li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Products</a>
                    </li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <ul className='grid grid-rows-3 gap-5'>
                    <li className='font-bold text-orange-400 mb-5 text-2xl'>Others</li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Help</a>
                    </li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Payment Options</a>
                    </li>
                    <li className='hover:text-orange-400 cursor-pointer'>
                        <a href='/'>Privacy Policy</a>
                    </li>
                </ul>
                <ul className='p-3 bg-white rounded-md w-4/12 text-zinc-600 h-fit'>
                    <li className='font-bold text-lg'>" Leave your email for news !"</li>
                    <li className='mt-3'>
                        <form action='#'>
                            <input
                                type='email'
                                className='p-3 px-4 w-10/12 border outline-none focus:border-orange-500 rounded-lg'
                                placeholder='Your Email'
                            />
                            <button
                                type='submit'
                                className='p-3 ms-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-md text-white'
                            >
                                Send
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FooterComponent
