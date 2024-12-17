import { CardText } from "../shared/CardText";

export const SpeakerProduct2 = ({countClass, btnClass1, btnClass2, productPrice}) => {
  return (
    <>
      <CardText
        cardProductReverse="card-product-reverse"
        imageClass="card-image-speakers-2"
        model="zx7"
        category="speaker"
        description={`Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.`}
        productPrice={productPrice}
        path="/speakers/zx7-speaker"
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
