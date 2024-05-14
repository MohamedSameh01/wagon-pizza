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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [prodOfSubCats, setProdOfSubCats] = useState({});
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);


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
  scrollToTop();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading
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
      setIsLoading(false); // End loading
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true); // Start loading
  //     try {
  //       const response = await fetch(
  //         `${server}api/Product/${selectedSubCategory}`
  //       );
  //       if (!response.ok) {
  //         // throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setProdOfSubCats(data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //     setIsLoading(false); // End loading
  //   };

  //   fetchProducts();
  // }, [selectedSubCategory]);

  const getSelectedCat = (id) => {
    setSelectedCategory(id);
    scrollToSection();
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
          {isLoading ? (
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
          {selectedCategory&&isLoading ? (
            <Spiner />
          ) : (
            categories?.data
              ?.find((x) => x.id === selectedCategory)
              ?.subCategory.map((ele) => {
                return (
                  <button
                    key={ele.id}
                    className="btn"
                    onClick={()=>getSelectedSubCat(ele.id)}
                  >
                    {ele.name}
                  </button>
                );
              })
          )}
        </div>

        {/* <div className="cards">
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
        </div> */}
        <div></div>
      </div>
    </section>
  );
};

export default Menue;
