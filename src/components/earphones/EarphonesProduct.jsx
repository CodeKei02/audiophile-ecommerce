import { CardText } from "../../index";
export const EarphonesProduct = ({
  countClass,
  btnClass1,
  btnClass2,
  productPrice,
}) => {
  return (
    <>
      <CardText
        imageClass="card-image-earphones"
        text="New Product"
        model="yx1 wireless"
        category="earphones"
        description={`Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.`}
        productPrice={productPrice}
        path="/earphones/yx1-wireless-earphones"
        countClass={countClass}
        btnClass1={btnClass1}
        btnClass2={btnClass2}
      />
    </>
  );
};
