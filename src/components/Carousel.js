"use client"
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import image1 from '/public/assets/bromo3.jpg';
import image2 from '/public/assets/sunset.jpg';
import image3 from '/public/assets/raja-ampat.jpg';
import image4 from '/public/assets/bromo2.jpg';
import image5 from '/public/assets/borobudur.jpg';
import image6 from '/public/assets/padar-island.jpg';
import image7 from '/public/assets/Bali.jpg';
import image8 from '/public/assets/papandayan.jpg';


const Carousel = () => {
    const images = [
        {src: image1, title: 'Bromo'},
        {src: image2, title: 'Sunset'},
        {src: image3, title: 'Raja Ampat Islands'},
        {src: image4, title: 'Bromo2'},
        {src: image5, title: 'Borobudur'},
        {src: image6, title: 'Padar Island'},
        {src: image7, title: 'Bali'},
        {src: image8, title: 'Garut'},
    ];

    return (
        <div className="py-12 max-w-6xl mx-auto min-h-screen px-4">
            <h2 className="text-center text-3xl md:text-3xl xl:text-5xl font-bold mb-20 text-white">Most Popular</h2>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                navigation
                pagination={{clickable: true}}
                effect="coverflow"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    scale: 1,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div
                            className="relative rounded-xl overflow-hidden shadow-lg w-full h-[546px] md:w-96 md:h-[580px]">
                            <Image src={image.src} alt={image.title}
                                   layout="fill" objectFit="cover"
                                   className="rounded-lg"/>
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-center">
                                <h3 className="text-lg font-semibold">{image.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
