// import React from 'react'

import { useEffect, useState } from "react";
import MealCard from "../../component//MealCard/MealCard";
import "./Angebote.css";
import { Navigation, Pagination} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Angebote = () => {
  const server = "https://admin.lightsoft.ch/";
  const [todayProductsData, setTodayProductsData] = useState({});
  const [offers, setOffers] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${server}api/TodayBonus/GetAllTodayBonus`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTodayProductsData(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${server}api/Offer/GetAllOffers`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);
  console.log("dailyProducts", offers.data);

  return (
    <section className="angebote">
      <div className="container">
        <div className="today-bonus">
          <h1>
            Today<span className="highlight">Bonus</span>
          </h1>
          <div className="cards">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {todayProductsData.data &&
                todayProductsData?.data?.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <MealCard
                        width={'100%'}
                        mealName={product.name}
                        imageSrc={`${server}Images/${product.photoName}`}
                        description={product.description}
                        price={product.price}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="offers">
          <h1>
            Today<span className="highlight">offers</span>
          </h1>
          <div className="cards">
            {offers.data &&
              offers?.data?.map((offer) => {
                return (
                  <MealCard
                    key={offer.id}
                    mealName={offer.name}
                    imageSrc={`${server}Images/${offer.photoName}`}
                    description={offer.description}
                    price={offer.price}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Angebote;
