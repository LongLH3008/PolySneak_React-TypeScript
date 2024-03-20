import React from 'react'

type Props = {}

const BannerComponent = (props: Props) => {
    return (
        <section className='w-full px-48 font-semibold'>
            <div
                id='banner'
                style={{ height: '85vh' }}
                className='mt-5 bg-gradient-to-br from-orange-400 to-amber-400 rounded-md relative h-screen'
            >
                <h1 className='absolute left_banner z-20 text-9xl text-orange-200'>NEW</h1>
                <img
                    className='absolute left-1/2 img_banner cursor-pointer hover:z-30'
                    src='src/assets/banner.png'
                    alt=''
                />
                <h1 className='absolute right_banner text-8xl text-amber-200 drop-shadow-lg'>ARRIVAL</h1>
            </div>
        </section>
    )
}

export default BannerComponent
