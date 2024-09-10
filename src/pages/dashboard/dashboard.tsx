import React from 'react'

import Banner from './_components/banner/banner'
import TopFramework from './_components/top-framework/top-framework'
import About from './_components/about/about'
import Subject from './_components/subject/subject'
import Course from './_components/course/course'
import Registration from './_components/registration/registration'
import Pricing from './_components/pricing/pricing'
import Comment from './_components/comment/comment'
import Blog from './_components/blog/blog'

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
            <Comment />
            <Blog />
        </main>
    )
}

export default Dashboard