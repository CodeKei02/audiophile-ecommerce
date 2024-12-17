import {
  EarphonesProduct,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories,
} from "../../index.js";

export const EarphonesProductDetail = () => {
  return (
    <div className="page-container">
      <div className="cards-container">
        <EarphonesProduct
          productPrice="$2,999"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics 
  designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with 
  the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and 
  truly immersive sound.`}
        featuresParagraph2={`The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
  built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
  giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in 
  an all new white and grey color scheme as well as the popular classic black.`}
        number1="2x"
        item1=" Earphone unit"
        number2="6x"
        item2=" Multi-size earplugs"
        number3="1x"
        item3=" User manual"
        number4="1x"
        item4=" USB-C charging cable"
        number5="1x"
        item5=" Travel pouch"
      />
      <ProductGallery
        image1={`earphones-product-image-1`}
        image2={`earphones-product-image-2`}
        image3={`earphones-product-image-3`}
      />
      <SuggestedProducts
        name1="XX99 Mark I"
        name2="XX59"
        name3="ZX9 speaker"
        image1="suggested_product_image-headphones-1"
        image2="suggested_product_image-headphones-2"
        image3="suggested_product_image-headphones-3"
      />
      <Categories />
    </div>
  );
};
