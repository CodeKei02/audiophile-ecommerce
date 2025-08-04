import { Button, QuantityButton, ProductHeadline, Overlay } from "../../index";
import "../../css/components/card_category.css";
import { HoverImages } from "../Images/HoverImages";
import { ZoomButton } from "../Button/ZoomButton";
import { useState } from "react";
import { ModalImage } from "../Modals/Modal-image";
import products from "../../products.json";
import { CategorySlide } from "../Slide/CategorySlide";
import { Characteristics } from "../Characteristics/Characteristics";

export const ProductCard = (props) => {
  const {
    linkTo,
    detailPage = false,
    onProductAdd = () => {},
    product,
    quantity,
    increment,
    decrement,
  } = props;
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [currentImage, setCurrentImage] = useState(null);

  function galleryImages() {
    if (product && product.category && products[product.category]) {
      return products[product.category].map((p) => p.image.gallery_image1);
    }
    return [];
  }

  const handleThumbnailClick = (img) => setCurrentImage(img);

  const imagesProduct = galleryImages();

  return (
    <div className={detailPage ? "productCard--detail" : "productCard"}>
      <>
        {detailPage ? (
          <div className="productCard__gallery">
            <div className="productCard__image-container">
              <img
                className="productCard__image"
                src={currentImage || product.image?.product}
                alt={`${product.name} ${product.category}`}
              />
              <ZoomButton openModal={() => openModal()} />
            </div>

            <CategorySlide
              images={imagesProduct}
              onThumbnailClick={handleThumbnailClick}
            />
          </div>
        ) : (
          <HoverImages product={product} className="productCard__image" />
        )}
      </>

      <div className="productCard__content">
        <ProductHeadline
          name={product.name}
          category={product.category}
          rating={product.rating}
          color={product.color}
        />

        <p className="productCard__price">{`$${product.price}`} USD</p>
        {product.colors && (
          <div className="productCard__colors">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="productCard__color"
                style={{ backgroundColor: color }}
                value={color}
              ></div>
            ))}
          </div>
        )}
        <div className="buttons">
          {detailPage && (
            <QuantityButton
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />
          )}
          <Button
            onClick={() => onProductAdd(product)}
            linkTo={linkTo}
            className="btn"
            style={detailPage ? { width: "50%" } : { width: "100%" }}
          >
            {detailPage ? "Add to cart" : "See Product"}
          </Button>
        </div>
        {detailPage && (
          <>
            <p className="mt-3 opacity-70">{product.description}</p>
            <Characteristics />
          </>
        )}
      </div>
      {open && (
        <>
          <Overlay
            display={openModal && "overlay-active"}
            style={{ background: "rgb(255, 255, 255)" }}
          />
          <ModalImage onClose={() => closeModal()} images={imagesProduct} />
        </>
      )}
    </div>
  );
};
