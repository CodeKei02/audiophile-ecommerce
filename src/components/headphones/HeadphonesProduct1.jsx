import { CardText } from "../../index";
export const HeadphonesProduct1 = ({countClass, btnClass1, btnClass2, productPrice}) => {
  return (
    <>
      <CardText 
        imageClass="card-image-headphones-1"
        text="New product"
        model="XX99 Mark II"
        category="Headphones"
        description={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the
        balanced depth and precision of studio-quality sound.`}
        productPrice={productPrice}
        path="/headphones/xx99-mark-II-headphones"
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
