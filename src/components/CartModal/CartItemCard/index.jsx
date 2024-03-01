import { MdDelete } from "react-icons/md";

import styles from "./CardItem.module.scss"
// import styles from "./styles.module.scss"

export const CartItemCard = ({ product, cartList, setCartList }) => {


   const removeItem = (productID) => {
      
      const newItem = cartList.filter(item => item !== productID)

      setCartList(newItem)

   }


   return (
      <li className={styles.liMain}>
         <div className={styles.divList}>
            <img src={product.img} alt={product.name} />
            <div className={styles.divAjuste}>
               <h3>{product.name}</h3>
               <p>R$ {product.price}</p>
            </div>
         </div>
         <button className={styles.buttonRem} onClick={() => removeItem(product)} aria-label="delete" title="Remover item">
            < MdDelete size={21} />
         </button>
      </li>
   );
};
