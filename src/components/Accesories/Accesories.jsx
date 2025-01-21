import "../../css/components/accessories.css";
export const Accesories = (props) => {
  const { product } = props;
  const accessories = product.accessories;

  return (
    <div className="accessories__container">
      <h1 className="accessories__title">in the box</h1>
      <ul className="accessories__list">
        {accessories?.map((accessory, index) => {
          return (
            <div key={index} className="accessories__item">
              <span className="accessories__quantity">
                {accessory.quantity}
              </span>
              <p>{accessory.name}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
