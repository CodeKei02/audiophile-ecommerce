import { CardText } from "../shared/CardText";
export const HeadphonesProduct2 = ({countClass, btnClass1, btnClass2, productPrice}) => {
  return (
    <>
      <CardText
        cardProductReverse="card-product-reverse"
        imageClass="card-image-headphones-2"
        model="XX99 Mark I"
        category="Headphones"
        description={`As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.`}
        path="/headphones/xx99-mark-I-headphones"
        productPrice={productPrice}
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
