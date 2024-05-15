/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Menue.css";
import { useEffect, useRef, useState } from "react";
import MealCard from "../../component/MealCard/MealCard";
import Spiner from "../../component/spiner/Spiner";
import LabelCard from "../../component/LabelCard/LabelCard";
const Menue = () => {
  const server = "https://admin.lightsoft.ch/";
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
        const response = await fetch(`${server}api/Category/GetAllCategorys`);
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
          `${server}api/Product/GetAllProductsBySubCategoryId?id=${selectedSubCategory}`
        );
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProdOfSubCats(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
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

  console.log("cats", categories.data);
  console.log("selectedCategory", selectedCategory);
  console.log("selectedSubCategory", selectedSubCategory);

  return (
    <section className="menue-sec">
      <div className="container">
        <h1>
          <span className="highlight">Men</span>ue
        </h1>

        <div className="cats">
          {isLoading1 ? (
            <Spiner />
          ) : (
            categories?.data?.map((cat) => {
              return (
                <div
                  className="card-label"
                  key={cat.id}
                  onClick={() => getSelectedCat(cat.id)}
                >
                  <img
                    src={`${server}Images/${cat.photoName}`}
                    alt="label Image"
                    className="card-image"
                  />
                  <h4 className="card-title">{cat.name}</h4>
                </div>
              );
            })
          )}
        </div>

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

        <div className="cards">
          {prodOfSubCats.data &&
            prodOfSubCats?.data?.map((product) => {
              return (
                <MealCard
                  key={product.id}
                  mealName={product.name}
                  imageSrc={`${server}Images/${product.photoName}`}
                  description={product.description}
                  price={product.price}
                />
              );
            })}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Menue;
