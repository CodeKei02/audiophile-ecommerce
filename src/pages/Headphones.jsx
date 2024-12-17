import {
  HeadphonesCategory,
  Categories,
} from "../index";
import "../../src/css/components/card_category.css";
export const Headphones = () => {
  return (
    <>
      <h1 className="header-h1">Headphones</h1>
      <div className="page-container">
        <HeadphonesCategory />
        <Categories />
      </div>
    </>
  );
};
