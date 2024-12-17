import { CardText } from "../../index";
export const SpeakerProduct1 = ({
  countClass,
  btnClass1,
  btnClass2,
  productPrice,
}) => {
  return (
    <>
      <CardText
        imageClass="card-image-speakers-1"
        text="New Product"
        model="zx9"
        category="speaker"
        description={`Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            creating new possibilities for more pleasing and practical audio
            setups.`}
        productPrice={productPrice}
        path="/speakers/zx9-speaker"
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
