// import React from 'react'
import backgroundImage1 from "../../assets/background/pizza2.jpg";
import backgroundImage2 from "../../assets/background/pizza1.jpg";
import backgroundImage3 from "../../assets/background/pizza3.jpg";
import backgroundImage4 from "../../assets/background/pizza4.jpg";
import backgroundImage5 from "../../assets/background/bg11.webp";
import {
    Autoplay,
    EffectFade,
    Keyboard,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
const Slider = () => {
    return (
        <section className="slider">
            <Swiper
                spaceBetween={ 30 }
                effect={ "fade" }
                navigation={ true }
                loop={ true }
                pagination={ {
                    clickable: true,
                } }
                creativeEffect={ {
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                } }
                keyboard={ {
                    enabled: true,
                } }
                autoplay={ {
                    delay: 3100,
                    disableOnInteraction: false,
                } }
                modules={ [Autoplay, EffectFade, Keyboard, Pagination, Navigation] }
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={ backgroundImage1 }
                        style={ {
                            height: "100vh",
                            width: "100%",
                        } }
                    />{ " " }
                </SwiperSlide>{ " " }
                <SwiperSlide>
                    <img
                        src={ backgroundImage2 }
                        style={ {
                            height: "100vh",
                            width: "100%",
                        } }
                    />{ " " }
                </SwiperSlide>{ " " }
                <SwiperSlide>
                    <img
                        src={ backgroundImage3 }
                        style={ {
                            height: "100vh",
                            width: "100%",
                        } }
                    />{ " " }
                </SwiperSlide>{ " " }
                <SwiperSlide>
                    <img
                        src={ backgroundImage4 }
                        style={ {
                            height: "100vh",
                            width: "100%",
                        } }
                    />{ " " }
                </SwiperSlide>{ " " }
                <SwiperSlide>
                    <img
                        src={ backgroundImage5 }
                        style={ {
                            height: "100vh",
                            width: "100%",
                        } }
                    />{ " " }
                </SwiperSlide>{ " " }
            </Swiper>{ " " }
            <div className="slider-info">
                <h1> Wangen </h1> <h1> Pizza, Kebab und Kurier </h1>{ " " }
                <p> Unser Geheimrezept: Qualität, Frische und Vielfalt! </p>{ " " }
            </div>{ " " }
        </section>
    );
};

export default Slider;
