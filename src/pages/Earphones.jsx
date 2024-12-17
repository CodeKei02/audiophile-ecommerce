import { EarphonesCategory, Categories } from "../index.js";
export const Earphones = () => {
  return (
    <>
      <h1 className="header-h1">Earphones</h1>
      <div className="page-container">
        <EarphonesCategory />
        <Categories />
      </div>
    </>
  );
};
