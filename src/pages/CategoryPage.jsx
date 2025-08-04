import { useParams } from "react-router-dom";
import products from "../products.json";
import { CategoryBanner, ProductCard, Categories } from "../index";
import "../css/components/input.css";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const CategoryPage = () => {
  const params = useParams();
  const category = products[params.category];
  const [priceRange, setPriceRange] = useState([18, 100]);
  const priceMin = priceRange[0];
  const priceMax = priceRange[1];

  const filteredForPricing = category.filter(
    (p) => p.price >= priceMin && p.price <= priceMax
  );

  return (
    <>
      <CategoryBanner title={params.category} />

      <div className="productCategory-filter page-container">
        <span>Price</span>
        <div className="range-slider">
          <Slider
            range
            min={18}
            max={100}
            defaultValue={[18, 100]}
            onChange={(value) => setPriceRange(value)}
            className="range"
          />
        </div>
        <span>
          {priceMin}$ - {priceMax}$
        </span>
      </div>

      <div className="page-container">
        <div className="productCard__container">
          {filteredForPricing.length === 0 ? (
            <p>The product don't exist</p>
          ) : (
            filteredForPricing.map((p) => (
              <ProductCard
                key={p.id}
                linkTo={`/${params.category}/${p.shortName
                  .split(` `)
                  .join(`-`)}`}
                product={p}
              />
            ))
          )}
        </div>
        <Categories />
      </div>
    </>
  );
};
