import { useState } from "react"
import styles from  "./ProductCard.module.scss"
import { useEffect } from "react"


export const ProductCard = ({ product, cartList, setCartList }) => {

    


const addItemsToList = (productID) => {

    setCartList((prevCart) => [...prevCart, productID])
}



    return(
        <li className={styles.liMain}>
            <img src={product.img} alt={product.name} />
            <div className={styles.div_conteudo}>
                <h3>{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addItemsToList(product)}>Adicionar</button>
            </div>
        </li>
    )
}