import { useHoverImages } from "../../hooks/useHoverImages";
import "../../css/components/hover_images.css";
export const HoverImages = ({ product, className }) => {
  const { hoveredImages, handleImageChange } = useHoverImages();
  return (
    <div
      className="hover-image-wrapper"
      onMouseEnter={() => handleImageChange(product.id, true)}
      onMouseLeave={() => handleImageChange(product.id, false)}
    >
      <img
        src={product.image.product}
        alt={product.name}
        className={className + " base-image"}
        style={{
          opacity: hoveredImages[product.id] ? 0 : 1,
        }}
        draggable={false}
      />
      <img
        src={product.image.gallery_image1}
        alt={product.name}
        className={className + " hover-image"}
        style={{
          opacity: hoveredImages[product.id] ? 1 : 0,
        }}
        draggable={false}
      />
    </div>
  );
};
