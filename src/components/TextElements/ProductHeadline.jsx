export const ProductHeadline = (props) => {
  const { name, category } = props;

  return (
    <h2 className="productCard__headline">
      {name} <br />
      {category}
    </h2>
  );
};
