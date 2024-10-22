import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bedsheetImg from '../assets/images/bedsheet2.jpg';
import curtainImg from '../assets/images/curtain2.jpg';
import sofacoverImg from '../assets/images/sofacover.jpg';
import pillowImg from '../assets/images/pillow6.jpg';

const HomeSlider = () => {

    const slides = [
        {
            title: 'Bedsheets',
            subtitle: 'New Products',
            description: 'Discover the latest designed bedsheets for your style.',
            image: bedsheetImg,
        },
        {
            title: 'Modern Curtains',
            subtitle: 'Exclusive Deals',
            description: 'Curtain which makes your place beautiful',
            image: curtainImg,
        },
        {
            title: 'Sofa Covers',
            subtitle: 'Exclusive Deals',
            description: 'Sofa Covers save your sofa from dust and stains',
            image: sofacoverImg,
        },
        {
            title: 'Pillow Covers',
            subtitle: 'Exclusive Deals',
            description: 'Match your pillow covers with your bedsheets',
            image: pillowImg,
        },
    ];
    return (
        <div className="w-full h-screen relative">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                                <div className=" text-center text-white space-y-4 px-6 opacity-0 translate-y-[-20px] transition-all duration-700 ease-out animate-in-slide">
                                    <h2 className="text-lg md:text-2xl uppercase font-semibold">
                                        {slide.subtitle}
                                    </h2>
                                    <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                                    <p className="text-base md:text-lg">{slide.description}</p>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default HomeSlider