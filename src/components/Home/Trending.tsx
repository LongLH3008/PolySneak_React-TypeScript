import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Trending = (props: Props) => {
    return (
        <section className='mt-20 px-48 w-full'>
            <div className='flex justify-start mb-20'>
                <h1 className='text-3xl font-semibold text-zinc-600'>Trending</h1>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='flex justify-center items-center overflow-hidden hover:*:scale-110 *:w-full *:h-full *:cursor-pointer'>
                    <img
                        className='w-100 h-100'
                        src='https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_535,c_limit/666737a0-d8c0-41fa-9502-984aa9c0a4dd/nike-just-do-it.png'
                        alt=''
                    />
                </div>
                <div className='flex justify-center items-center overflow-hidden hover:*:scale-110 *:w-full *:h-full *:cursor-pointer'>
                    <img
                        className='w-100 h-100'
                        src='https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_535,c_limit/7e57dc2c-7adc-4c45-96fa-342ed813d203/nike-just-do-it.png'
                        alt=''
                    />
                </div>
                <div className='flex justify-center items-center overflow-hidden hover:*:scale-110 *:w-full *:h-full *:cursor-pointer'>
                    <img
                        className='w-100 h-100'
                        src='https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_535,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png'
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}

export default Trending
