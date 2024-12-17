import "../../css/components/product_gallery.css";
export const ProductGallery = ({image1, image2, image3}) => {
  return (
    <div className="product-gallery">
      <div className={`product-gallery-image ${image1}`}></div>
      <div className={`product-gallery-image ${image2} image-2`}></div>
      <div className={`product-gallery-image ${image3} image-3`}></div>
    </div>
  );
};
