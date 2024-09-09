import React from 'react'

import Banner from './_components/banner/banner'
import TopFramework from './_components/top-framework/top-framework'
import About from './_components/about/about'
import Subject from './_components/subject/subject'
import Course from './_components/course/course'
import Registration from './_components/registration/registration'
import Pricing from './_components/pricing/pricing'

const Dashboard: React.FC = () => {
    return (
        <main id='dashboard'>
            <div className="container">
                <Banner />
            </div>
            <TopFramework />
            <About />
            <Subject />
            <Course />
            <Registration />
            <Pricing />
        </main>
    )
}

export default Dashboard