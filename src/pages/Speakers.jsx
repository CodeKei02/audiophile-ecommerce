import { SpeakersCategory, Categories } from "../index.js";
export const Speakers = () => {
  return (
    <>
      <h1 className="header-h1">Speakers</h1>
      <div className="page-container">
        <SpeakersCategory />
        <Categories />
      </div>
    </>
  );
};
