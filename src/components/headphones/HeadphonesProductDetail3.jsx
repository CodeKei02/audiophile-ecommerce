import {
  HeadphonesProduct3,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories,
} from "../../index";

export const HeadphonesProductDetail3 = () => {
  return (
    <div className="page-container">
      <div className="cards-container">
        <HeadphonesProduct3
          productPrice="$899"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact
  folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the
  latest wireless technology engineered for audio synchronization with videos.`}
        featuresParagraph2={`More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free
  calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access
  touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an
  impressive 30-hour battery life that can be rapidly recharged via USB-C.`}
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
        image1={`headphones-product-3-image-1`}
        image2={`headphones-product-3-image-2`}
        image3={`headphones-product-3-image-3`}
      />
      <SuggestedProducts
        name1="XX99 Mark II"
        name2="XX99 Mark I"
        name3="ZX9 speaker"
        image1="suggested_product_image-headphones-2"
        image2="suggested_product_image-headphones-1"
        image3="suggested_product_image-speaker-1"
        path1="/headphones/xx99-mark-II-headphones"
        path2="/headphones/xx99-mark-I-headphones"
        path3="/speakers/zx9-speaker"
      />
      <Categories />
    </div>
  );
};
