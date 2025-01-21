import "../../css/components/features_paragraph.css"
export const Paragraph = (props) => {
  const { paragraph = ""} = props;
  return (
    <>
      <p className="productCard__paragraph">{paragraph}</p>
    </>
  );
};
