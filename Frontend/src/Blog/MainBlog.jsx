import React from 'react'
import UserBlog from './UserBlog'
import BlogHeader from './BlogHeader'
import MyFooter from '../components/MyFooter'

const MainBlog = () => {
    return (
        <>
            <BlogHeader />
            <UserBlog />
            <MyFooter />
        </>
    )
}

export default MainBlog