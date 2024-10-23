import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import CircleBox from '../Components/CircleBox'
import HomeSlider from '../Components/HomeSlider'
import FilterableGallery from '../Components/FilterableGallery'
import BlogCard from '../Components/BlogCard'
import BlogCont from '../Components/BlogCont'

const HomePage = () => {

    return (
        <Layout>
            {/* Slider  */}
            <HomeSlider />

            <div className='flex justify-center items-center my-10'>
                <CircleBox />
            </div>

            <div className='my-5'>
                <h1 className='text-center text-4xl font-bold p-1 '>Our Products</h1>
                <p className='text-center text-lg p-2 '>Our Best Products</p>
                <FilterableGallery />
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center '>Latest News </h1>
                <p className='text-xl text-center pt-3 md:w-1/2 md:m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic incidunt nam ducimus dolore quod?</p>
                <BlogCont />
            </div>

            {/* <ProductCard /> */}
        </Layout>
    )
}

export default HomePage