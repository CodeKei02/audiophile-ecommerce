import { Swiper, SwiperSlide } from "swiper/react";

export const CategorySlide = ({ images, onThumbnailClick }) => {
  return (
    <Swiper
      slidesPerView={4}
      breakpoints={{}}
      spaceBetween={10}
      className="category-slide"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <button
            className="slide-btn"
            onClick={() => onThumbnailClick && onThumbnailClick(img)}
          >
            <img src={img} alt={`Slide ${i}`} width="100" />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
