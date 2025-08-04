import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
export const ModalImage = ({ images, onClose }) => {
  return (
    <div className="modalImage-container">
      <div className="modalImage">
        <button
          className="btn-close btn-close-black"
          onClick={onClose}
        ></button>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          className="image-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} className="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
