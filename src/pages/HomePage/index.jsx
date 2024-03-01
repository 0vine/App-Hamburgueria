import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

import { api } from "../../api";
import { useEffect } from "react";
// API

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false)


   
 useEffect(() => {
   const getItems = async () => {
      const {data} = await api.get("/products")
      setProductList(data)
      console.log(data)
   }
   getItems()
 }, [])


 useEffect(() => {
   localStorage.setItem("@list", JSON.stringify(cartList))
}, [cartList])

 
   
   // useEffect montagem - carrega os produtos da API e joga em productList 
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header isOpen={isOpen} setIsOpen={setIsOpen} cartList={cartList} setCartList={setCartList}/>
         <main>
            <ProductList productList={productList}  cartList={cartList} setCartList={setCartList}/>
            {isOpen ? <CartModal setIsOpen={setIsOpen} cartList={cartList} setCartList={setCartList}/> : null}
         </main>
      </>
   );
};
