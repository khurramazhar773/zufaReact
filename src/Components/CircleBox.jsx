import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Link } from 'react-router-dom';
import categories from '../Constants/Categories';

const CircleBox = () => {
    return (

        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    }
                }}
                className="mySwiper w-full md:w-[80%] m-auto"
            >
                {categories.map((c) => (
                    <SwiperSlide key={c.id}>

                        <Link to={`${c.link}`} className=" m-1 w-36 h-36 md:w-44 md:h-44 border-2 border-black rounded-full  flex flex-col items-center justify-center hover:border-orange-500 hover:border-dashed">
                            <img
                                src={c.Image}
                                alt="Product"
                                className="w-[40%] h-[35%] md:w-[55%] md:h-[50%]"
                            />
                            <h1 className="py-2 text-lg">{c.name}</h1>
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CircleBox;
