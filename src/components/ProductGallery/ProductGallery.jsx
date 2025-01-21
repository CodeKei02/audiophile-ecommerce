import "../../css/components/product_gallery.css";
export const ProductGallery = (props) => {
  const { product } = props;

  return (
    <div className="product_gallery">
      <img className="productGallery__img--1 desktop-img" src={product.image?.galleryDesktop1} alt={`${product.name} ${product.category}`}/>
      <img className="productGallery__img--1 tablet-img" src={product.image?.galleryTablet1} alt={`${product.name} ${product.category}`} />
      <img className="productGallery__img--1 mobile-img" src={product.image?.galleryMobile1} alt={`${product.name} ${product.category}`} />
      
      <img className="productGallery__img--2  desktop-img" src={product.image?.galleryDesktop2} alt={`${product.name} ${product.category}`} />
      <img className="productGallery__img--2 tablet-img" src={product.image?.galleryTablet2} alt={`${product.name} ${product.category}`} />
      <img className="productGallery__img--2 mobile-img" src={product.image?.galleryMobile2} alt={`${product.name} ${product.category}`} />
      
      <img className="productGallery__img--3  desktop-img" src={product.image?.galleryDesktop3} alt={`${product.name} ${product.category}`} />
      <img className="productGallery__img--3 tablet-img" src={product.image?.galleryTablet3} alt={`${product.name} ${product.category}`} />
      <img className="productGallery__img--3 mobile-img" src={product.image?.galleryMobile3} alt={`${product.name} ${product.category}`} />
    </div>
  );
};
