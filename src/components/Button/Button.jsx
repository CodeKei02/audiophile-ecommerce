import { Link } from "react-router-dom";

export const Button = (props) => {
  const { linkTo = "#", children, ...rest} = props;
  return (
    <Link to={linkTo}  className="btn" {...rest}>
      {children}
    </Link>
  );
};
