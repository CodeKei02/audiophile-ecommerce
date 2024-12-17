import { CardText } from "../shared/CardText";
export const HeadphonesProduct3 = ({countClass, btnClass1, btnClass2, productPrice}) => {
  return (
    <>
      <CardText 
        imageClass="card-image-headphones-3"
        model="XX59"
        category="Headphones"
        description={`Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.`}
        path="/headphones/xx59-headphones"
        productPrice={productPrice}
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
