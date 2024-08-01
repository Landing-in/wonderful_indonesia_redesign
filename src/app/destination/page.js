"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const data = [
    {img: "/public/assets/bromo3.jpg", alt:"Gunung Bromo"}
]
export default function DestinationPage() {
    return (
        <div className="text-primary font-bold">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}