import '../../css/components/card_category.css'
export const CategoryBanner = (props) => {
  const { title } = props;
  return <h1 className="category-banner">{title}</h1>;
};
