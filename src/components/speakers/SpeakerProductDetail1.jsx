import {
  SpeakerProduct1,
  ProductDetailContent,
  ProductGallery,
  SuggestedProducts,
  Categories,
} from "../../index";

export const SpeakerProductDetail1 = () => {
  return (
    <div className="page-container">
      <div className="cards-container">
        <SpeakerProduct1
          productPrice="$ 4,500"
          countClass="d-flex"
          btnClass1="d-none"
          btnClass2="d-flex"
        />
      </div>
      <ProductDetailContent
        featuresParagraph1={`Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, 
  USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices 
  connected for easy switching. Improved bluetooth technology offers near lossless audio quality at 
  up to 328ft (100m).`}
        featuresParagraph2={` Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm 
  tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass 
  unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you 
  will experience new sensations from old songs since it can respond to even the subtle waveforms.`}
        number1="2x"
        item1="Speaker unit"
        number2="2x"
        item2="Speaker cloth panel"
        number3="1x"
        item3="User manual"
        number4="1x"
        item4="3.5 10m audio cable"
        number5="1x"
        item5="10m optical cable"
      />
      <ProductGallery 
        image1={`speaker-product-1-image-1`}
        image2={`speaker-product-1-image-2`}
        image3={`speaker-product-1-image-3`}
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
