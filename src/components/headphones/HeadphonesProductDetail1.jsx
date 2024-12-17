import {
  HeadphonesProduct1,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories
} from "../../index";

export const HeadphonesProductDetail1 = () => {
  

  return (
    <div className="page-container">
      <div className="cards-container">
        <HeadphonesProduct1
          productPrice="$2,999"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`Featuring a genuine leather head strap and premium earcups, these headphones deliver superior 
        comfort for those who like to enjoy endless listening. It includes intuitive controls designed 
        for any situation. Whether you’re taking a business call or just in your own personal space, the 
        auto on/off and pause features ensure that you’ll never miss a beat.`}
        featuresParagraph2={`The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio 
        world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings 
        when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the 
        XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`}
        number1="1x"
        item1=" Headphone unit"
        number2="2x"
        item2=" Replacement earcups"
        number3="1x"
        item3=" User manual"
        number4="1x"
        item4=" 3.5mm 5m audio cable"
        number5="1x"
        item5=" Travel bag"
      />
      <ProductGallery 
        image1={`headphones-product-image-1`}
        image2={`headphones-product-image-2`}
        image3={`headphones-product-image-3`}
      />
      <SuggestedProducts 
        name1="XX99 Mark I"
        name2="XX59"
        name3="ZX9 speaker"
        image1="suggested_product_image-headphones-1"
        image2="suggested_product_image-headphones-3"
        image3="suggested_product_image-speaker-1"
        path1="/headphones/xx99-mark-I-headphones"
        path2="/headphones/xx59-headphones"
        path3="/speakers/zx9-speaker"
      />
      <Categories />
    </div>
  );
};
