import React from 'react'
import Companies from './layout/Companies'
import Header from './layout/Header'
import Hero from './layout/Hero'
import What from './layout/What'
import Feature1 from './layout/Feature1'
import Feature2 from './layout/Feature2'
import CTA from './layout/CTA'
import Blog from './layout/Blog'
import Footer from './layout/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Companies />
            <What />
            <Feature1 />
            <Feature2 />
            <CTA />
            <Blog />
            <Footer />
        </>
    )
}

export default Home