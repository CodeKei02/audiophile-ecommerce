import {
  Header,
  FeaturedProducts
} from "../index";
import { CategoriesHome } from "../components/home/CategoriesHome";
import { BestSellingProducts } from "../components/home/BestSellingProducts";
import { Services } from "../components/home/Services";


export const Home = () => {
  

  return (
    <>
      <Header />
      <CategoriesHome />
      <BestSellingProducts />
      <Services />
    </>
  );
};
