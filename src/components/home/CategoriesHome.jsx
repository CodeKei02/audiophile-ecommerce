import { motion } from "framer-motion";
import "../../css/home/categories.css";
import { Link } from "react-router-dom";

export const CategoriesHome = () => {
  const categories = [
    {
      id: 1,
      name: "Headphones",
      description: "Discover our wide range of high-quality headphones.",
      image: "/public/images/home/categories/headphones.png",
      link: "/headphones",
    },
    {
      id: 2,
      name: "Speakers",
      description: "Enjoy surround sound with our speakers.",
      image: "/public/images/home/categories/speakers.png",
      link: "/speakers",
    },
    {
      id: 3,
      name: "Earphones",
      description: "Explore our wireless and wired headphones.",
      image: "/public/images/home/categories/earphones.png",
      link: "/earphones",
    },
  ];
  return (
    <>
      <div
        className="categories-home"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateX: -0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`category-card category-card-${category.name.toLowerCase()} ${category.name.toLowerCase()}`}
          >
            <div
              className={`category-image ${category.name.toLowerCase()}-background`}
            >
              <img
                src={category.image}
                className={`image ${category.name.toLowerCase()}-image`}
              />
            </div>
            <div
              className={`category-content ${category.name.toLowerCase()}-content`}
            >
              <h3 className="category-title">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <Link to={category.link} className="category-link">
                SHOW NOW{" "}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
