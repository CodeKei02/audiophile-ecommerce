import { useParams } from "react-router-dom"
import products from "../products.json"
import { CategoryBanner, ProductCard, Categories } from "../index";
export const CategoryPage = () => {
    const params = useParams();
    const category = products[params.category];

  return (
    <>
        <CategoryBanner title={params.category}/>
        <div className="page-container">
            <div className="productCard__container">
                {category.map((product) => 
                <ProductCard 
                    key={product.id}
                    linkTo={`/${params.category}/${product.shortName.split(` `).join(`-`)}`}
                    product={product}
                />
                )}
            </div>  
        <Categories />
        </div>
    </>
  )
}
