import {
  HeadphonesProduct2,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories,
} from "../../index";

export const HeadphonesProductDetail2 = () => {
  return (
    <div className="page-container">
      <div className="cards-container">
        <HeadphonesProduct2
          productPrice="$1,750"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades 
        of audio expertise, redefining the critical listening experience. This pair of closed-back headphones 
        are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`}
        featuresParagraph2={`From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, 
        the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers 
        up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. 
        For connectivity, a specially tuned cable is included with a balanced gold connector.`}
        number1="1x"
        item1=" Headphone unit"
        number2="2x"
        item2=" Replacement earcups"
        number3="1x"
        item3=" User manual"
        number4="1x"
        item4=" 3.5mm 5m audio cable"
      />
      <ProductGallery
        image1={`headphones-product-2-image-1`}
        image2={`headphones-product-2-image-2`}
        image3={`headphones-product-2-image-3`}
      />
      <SuggestedProducts
        name1="XX99 Mark II"
        name2="XX59"
        name3="ZX9 speaker"
        image1="suggested_product_image-headphones-2"
        image2="suggested_product_image-headphones-3"
        image3="suggested_product_image-speaker-1"
        path1="/headphones/xx99-mark-II-headphones"
        path2="/headphones/xx59-headphones"
        path3="/speakers/zx9-speaker"
      />
      <Categories />
    </div>
  );
};
