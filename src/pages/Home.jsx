import {
  Header,
  Categories,
  FeaturedProducts
} from "../index";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <Categories />
        <FeaturedProducts />
      </div>
    </>
  );
};
