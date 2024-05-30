/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useRef, useState } from "react";
import MealCard from "../../component/MealCard/MealCard";
import Spiner from "../../component/spiner/Spiner";
import LabelCard from "../../component/LabelCard/LabelCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Menue.css";
const Menue = () => {
   const server = import.meta.env.VITE_SERVER;
  const [categories, setCategories] = useState({});
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [prodOfSubCats, setProdOfSubCats] = useState({});
  const sectionRef = useRef(null);
  // const sectionRef2 = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMeals = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading1(true);
      try {
        const response = await fetch(`${server}/api/Category/GetAllCategorys`);
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        // console.error("Failed to fetch products:", error);
      }
      setIsLoading1(false);
    };
    fetchProducts();
    scrollToTop();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading2(true);
      try {
        const response = await fetch(
          `${server}/api/Product/GetAllProductsBySubCategoryId?id=${selectedSubCategory}`
        );
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProdOfSubCats(data);
      } catch (error) {
        // console.error("Failed to fetch products:", error);
      }
      setIsLoading2(false);
    };

    fetchProducts();
  }, [selectedSubCategory]);

  const getSelectedCat = (id) => {
    setSelectedCategory(id);
    scrollToSection();
    setSelectedSubCategory("");
  };
  const getSelectedSubCat = (id) => {
    setSelectedSubCategory(id);
    scrollToMeals();
  };


  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  console.log(categories)
  return (
    <section className="menue-sec">
      <div className="container">
        <h1>
          <span className="highlight">Unser </span>Menü
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="animated-component"
        >
          <div className="cats">
            {isLoading1 ? (
              <Spiner />
            ) : (
              categories?.data
                ?.filter((cat) => cat.name !== "Offers" && cat.name !== "Bonus")
                .map((cat) => {
                  return (
                    <div
                      className="card-label"
                      key={cat.id}
                      onClick={() => getSelectedCat(cat.id)}
                    >
                      <img
                        src={`${server}/Images/${cat.photoName}`}
                        alt="label Image"
                        className="card-Image"
                      />
                      <h4 className="card-title">{cat.name}</h4>
                    </div>
                  );
                })
            )}
          </div>
        </motion.div>
        <div className="cats" ref={sectionRef}>
          {selectedCategory && isLoading2 ? (
            <Spiner />
          ) : (
            categories?.data
              ?.find((x) => x.id === selectedCategory)
              ?.subCategory.map((ele) => {
                return (
                  <button
                    key={ele.id}
                    className="btn"
                    onClick={() => getSelectedSubCat(ele.id)}
                  >
                    {ele.name}
                  </button>
                );
              })
          )}
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="animated-component"
        >
          <div className="cards">
            {prodOfSubCats.data &&
              prodOfSubCats?.data?.map((product) => {
                return <MealCard key={product.id} meal={product} />;
              })}
          </div>
        </motion.div>
        <div></div>
      </div>
    </section>
  );
};

export default Menue;
