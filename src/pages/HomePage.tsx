import React from 'react'
import BannerComponent from '~/components/BannerComponent'
import FooterComponent from '~/components/FooterComponent'
import HeaderComponent from '~/components/HeaderComponent'
import NewProds from '~/components/Home/NewProds'
import Trending from '~/components/Home/Trending'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <>
            <HeaderComponent />
            <BannerComponent />
            <NewProds />
            <Trending />
            <FooterComponent />
        </>
    )
}

export default HomePage
