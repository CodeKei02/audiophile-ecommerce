import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "../Button/Button";
import { HoverImages } from "../Images/HoverImages";
import products from "../../products.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../css/home/bestSellingProduct.css";

export const BestSellingProducts = () => {
  function filteredBestSellingProducts() {
    let bestProducts = [];

    for (let i in products) {
      let category = products[i];
      let product = category.filter((p) => p.rating === 5);
      bestProducts = bestProducts.concat(product);
    }

    for (let i = bestProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bestProducts[i], bestProducts[j]] = [bestProducts[j], bestProducts[i]];
    }

    return bestProducts;
  }

  const bestSelling = filteredBestSellingProducts();

  return (
    <div>
      <h2 className="bestSelling-title">Best sellers</h2>
      <div className="bestSelling-container">
        <div className="bestSelling-swiper">
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            spaceBetween={20}
            slidesPerView={5}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
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
            }}
          >
            {bestSelling.map((product) => (
              <SwiperSlide key={product.id} className="bestSelling-card">
                <div>
                  <HoverImages
                    className="bestSelling-image"
                    product={product}
                  />
                </div>
                <section className="bestSelling-content">
                  <p className="bestSelling-name">
                    <strong>{product.name}</strong> -{" "}
                    {product.rating.toFixed(1)}⭐
                  </p>
                  <p className="bestSelling-text">{product.color}</p>
                  <p className="bestSelling-price">
                    ${product.price.toFixed(2)} USD
                  </p>
                  <Button
                    linkTo={`/${product.category}/${product.shortName
                      .toLowerCase()
                      .split(` `)
                      .join("-")}`}
                  >
                    Buy now
                  </Button>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
};
