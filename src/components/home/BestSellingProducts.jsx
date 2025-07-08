import {Swiper, SwiperSlide} from "swiper/react";
import "../../css/home/bestSellingProduct.scss"
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { Button } from "../Button/Button";

const bestSelling = [
    {
      id: 1,
      name: "Power Wireless Earphones",
      path: "/earphones/power-wireless-black",
      color: "Black",
      rating: 5,
      price: 25,
      image: [
        {
          src: "../../../public/images/earphones/earphones-black/earphones-black-open.png",
          alt: "Black Earphones Open"
        },
        {
          src: "../../../public/images/earphones/earphones-black/earphones-black-close.png",
          alt: "Black Earphones Closed"
        }
      ]
    },
    {
      id: 2,
      name: "Power Wireless White",
      path: "/headphones/power-wireless-white",
      color: "White",
      rating: 4.5,
      price: 50,
      image: [
        {
          src: "../../../public/images/headphones/white/headphones-white-1.png",
          alt: "White Headphones 1"
        },
        {
          src: "../../../public/images/headphones/white/headphones-white-2.png",
          alt: "White Headphones 2"
        }
      ]
    },
    {
      id: 3,
      name: "Power Wireless Red",
      path: "/speakers/power-wireless-red",
      color: "Red",
      rating: 4.8,
      price: 30,
      image: [
        {
          src: "../../../public/images/speakers/red/speakers-red-1.png",
          alt: "Red Speakers 1"
        },
        {
          src: "../../../public/images/speakers/red/speakers-red-2.png",
          alt: "Red Speakers 2"
        }
      ]
    },
    {
      id: 4,
      name: "Power Wireless Blue",
      path: "/earphones/power-wireless-blue",
      color: "Blue",
      rating: 5,
      price: 25,
      image: [
        {
          src: "../../../public/images/earphones/earphones-blue/earphones-blue-open.png",
          alt: "Black Earphones Open"
        },
        {
          src: "../../../public/images/earphones/earphones-blue/earphones-blue-close.png",
          alt: "Black Earphones Closed"
        }
      ]
    },
    {
      id: 5,
      name: "Power Wireless Green",
      path: "/headphones/power-wireless-green",
      color: "Green",
      rating: 4.5,
      price: 50,
      image: [
        {
          src: "../../../public/images/headphones/green/headphones-green-1.png",
          alt: "Pink Headphones 1"
        }
        ,
        {
          src: "../../../public/images/headphones/green/headphones-green-2.png",
          alt: "Pink Headphones 2"
        }
      ]
    }
]


export const BestSellingProducts = () => {
  const [hoveredImages, setHoveredImages] = useState({});

  const handleImageChange = (id, value) => {
    setHoveredImages((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  return (
    <>
    <h2 className="title bestSelling-title">Best sellers</h2>
    <div className="bestSelling-container">
        
          <div className="bestSelling-swiper">
              <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ 
                  el: ".pagination",
                  clickable: true 
              }}
              spaceBetween={20}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                "@0.50": {
                  slidesPerView: 1.25,
                  spaceBetween: 25,
                },
                "@1.00": {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                "@1.25": {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                "@1.75": {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}>
                
                  {bestSelling.map((product) => (
                      <SwiperSlide key={product.id} className="bestSelling-card">
                          <div className="bestSelling-image-container">
                              <img 
                                src={hoveredImages[product.id] ? product.image[1].src : product.image[0].src} 
                                alt={hoveredImages[product.id] ? product.image[1].alt : product.image[0].alt} 
                                className="bestSelling-image"
                                onMouseEnter={() => handleImageChange(product.id, true)}
                                onMouseLeave={() => handleImageChange(product.id, false)}
                              />
                          </div>
                          <section className="bestSelling-content">
                            <p className="bestSelling-name"><strong>{product.name}</strong> - {product.rating.toFixed(1)}⭐</p>
                            <p className="bestSelling-text">{product.color}</p>
                            <p className="bestSelling-price">${product.price.toFixed(2)} USD</p>
                            <Button 
                              linkTo={product.path}
                            >Buy now</Button>
                          </section>
                          
                      </SwiperSlide>
                  ))}
                  
              </Swiper>
          </div>
          <div className="pagination" />
      </div>
    </>
  );
};
