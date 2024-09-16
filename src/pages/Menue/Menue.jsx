import { useEffect, useRef, useState } from "react";
import MealCard from "../../component/MealCard/MealCard";
import Spiner from "../../component/spiner/Spiner";
import { motion } from "framer-motion";
import Delivery from "../../component/Delivery/Delivery";
import Location from "../../component/Location/Location";
import "./Menue.css";

const Menue = () => {
  const server = import.meta.env.VITE_SERVER;
  const [categories, setCategories] = useState([]);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [nameOfType, setNameOfType] = useState("");
  const [prodOfSubCats, setProdOfSubCats] = useState([]);

  const sectionRef1 = useRef(null); // Ref for categories
  const sectionRef2 = useRef(null); // Ref for meals

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToRef = (ref, offset = -80) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading1(true);
      try {
        const response = await fetch(`${server}/api/Category/GetAllCategorys`);
        const data = await response.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
      setIsLoading1(false);
    };
    fetchCategories();
  }, [server]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading2(true);
      try {
        const response = await fetch(
          `${server}/api/Product/GetAllProductsBySubCategoryId?id=${selectedSubCategory}`
        );
        const data = await response.json();
        setProdOfSubCats(data.data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setIsLoading2(false);
    };
    if (selectedSubCategory) fetchProducts();
  }, [selectedSubCategory, server]);

  const getSelectedCat = (id) => {
    setSelectedCategory(id);
    setSelectedSubCategory("");
    setNameOfType("");
    scrollToRef(sectionRef2, -80);
  };

  const getSelectedSubCat = (id, name) => {
    setSelectedSubCategory(id);
    setNameOfType(name);
    scrollToRef(sectionRef1, -80);
  };
  return (
    <section className="menue-sec">
      <div className="container">
        <h1>
          <span className="highlight">Unser </span>Menü
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="animated-component"
        >
          <div className="cats">
            {isLoading1 ? (
              <Spiner />
            ) : (
              categories
                .filter((cat) => cat.name !== "Offers" && cat.name !== "Bonus")
                .map((cat) => (
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
                ))
            )}
          </div>
        </motion.div>

        <div className="cats" id="cats" ref={sectionRef2}>
          {selectedCategory && isLoading2 ? (
            <Spiner />
          ) : (
            categories
              .find((x) => x.id === selectedCategory)
              ?.subCategory.map((ele) => (
                <button
                  key={ele.id}
                  className="btn"
                  onClick={() => getSelectedSubCat(ele.id, ele.name)}
                >
                  {ele.name}
                </button>
              ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="animated-component"
        >
          <div className="selectedSubCategory">
            <h1>{nameOfType}</h1>
          </div>
          <div className="cards" ref={sectionRef1}>
            {prodOfSubCats.map((product) => (
              <MealCard key={product.id} meal={product} />
            ))}
          </div>
        </motion.div>
      </div>
      <Delivery />
      <Location />
    </section>
  );
};

export default Menue;
