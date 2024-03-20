import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const HeaderComponent: React.FC = () => {
    const openSearchbox = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const handleOpen = () => {
            console.log('vcc')
        }
        if (openSearchbox.current) {
            openSearchbox.current.addEventListener('click', handleOpen)
        }

        return () => {
            if (openSearchbox.current) {
                openSearchbox.current.removeEventListener('click', handleOpen)
            }
        }
    }, [])

    return (
        <section className='w-full px-48 font-semibold'>
            <nav className='flex justify-between items-center border-b py-4 text-zinc-600 relative'>
                <img width='60px' src={logo} alt='' />
                <ul className='flex justify-between items-center gap-3'>
                    <li className=''>
                        <Link
                            className='p-3 px-6 rounded-md hover:text-white hover:bg-gradient-to-br from-orange-400 to-amber-400 hover:transition-all cursor-pointer'
                            to='/'
                        >
                            Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            className='p-3 px-6 rounded-md hover:text-white hover:bg-gradient-to-br from-orange-400 to-amber-400 hover:transition-all cursor-pointer'
                            to='/product'
                        >
                            Product
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            className='p-3 px-6 rounded-md hover:text-white hover:bg-gradient-to-br from-orange-400 to-amber-400 hover:transition-all cursor-pointer'
                            to='/contact'
                        >
                            Contact
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            className='p-3 px-6 rounded-md hover:text-white hover:bg-gradient-to-br from-orange-400 to-amber-400 hover:transition-all cursor-pointer'
                            to='/help'
                        >
                            Help
                        </Link>
                    </li>
                </ul>
                <ul id='' className='flex justify-between items-center text-1xl'>
                    <li
                        id='openSearchbox'
                        ref={openSearchbox}
                        className='mr-5 cursor-pointer p-2 px-3 rounded-md hover:bg-gradient-to-r from-zinc-600 to-gray-500 hover:text-white'
                    >
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </li>
                    <li id='userStatus' className='relative'>
                        <Link
                            to='/signin'
                            className='p-2 px-3 rounded-md hover:bg-gradient-to-r from-zinc-600 to-gray-500 hover:text-white'
                        >
                            <i className='fa-solid fa-key'></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default HeaderComponent
