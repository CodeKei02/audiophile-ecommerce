import {
  SpeakerProduct2,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories,
} from "../../index";
export const SpeakerProductDetail2 = () => {
  return (
    <div className="page-container">
      <div className="cards-container">
        <SpeakerProduct2
          productPrice="$ 3,500"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and 
  excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made 
  from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for 
  more advanced usage.`}
        featuresParagraph2={` The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF 
  wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth 
  or traditional optical and RCA input. Switch input sources and control volume at your finger tips with 
  the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`}
        number1="2x"
        item1="Speaker unit"
        number2="2x"
        item2="Speaker cloth panel"
        number3="1x"
        item3="User manual"
        number4="1x"
        item4="3.5 7.5m audio cable"
        number5="1x"
        item5="7.5m optical cable"
      />
      <ProductGallery
        image1={`speaker-product-2-image-1`}
        image2={`speaker-product-2-image-2`}
        image3={`speaker-product-2-image-3`}
      />
      <SuggestedProducts
        name1="zx7 speaker"
        name2="XX99 Mark I"
        name3="XX59"
        image1="suggested_product_image-speaker-1"
        image2="suggested_product_image-headphones-1"
        image3="suggested_product_image-headphones-2"
      />
      <Categories />
    </div>
  );
};
