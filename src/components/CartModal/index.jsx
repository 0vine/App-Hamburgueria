import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";


import styles from "./style.module.scss"
// styles



export const CartModal = ({ cartList, setIsOpen, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const clearAll = () => {
      setCartList([])
   }

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={styles.modalBoxHeader}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.modalBoxList}>
               <ul className={styles.ulList}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} cartList={cartList} setCartList = {setCartList}/>
                  ))}
               </ul>
            </div>
            <div className={styles.modalBoxTotal}>
               <div>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={clearAll}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};

// className={styles.modalBox-Header}