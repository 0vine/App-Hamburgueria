import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

import "./Header.scss"

export const Header = ({setCartList, cartList, isOpen, setIsOpen}) => {
   const [value, setValue] = useState("");

   const [items, setTotalItems] = useState(0)


   useEffect(() => {

      setTotalItems(cartList.length)
      
   }, [cartList])


   return (
      <header className="header-container">
         <div className="div-container">
         <img className="img-logo" src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span className="spanItem">{items}</span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </header>
   );
};
