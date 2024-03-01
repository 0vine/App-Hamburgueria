import { ProductCard } from "./ProductCard";


import "./ProductList.scss"
// STYLE

export const ProductList = ({ productList, cartList, setCartList }) => {


   return (
      <ul>
         {productList.map((product) => (
            <ProductCard  key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
         ))}
      </ul>
   );
};
