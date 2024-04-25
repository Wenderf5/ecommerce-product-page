//styles
import style from './Carrinho.module.css';

//components
import ProdutoCarrinho from '../ProdutoCarrinho/ProdutoCarrinho';

//Hooks
import { useState, useEffect } from 'react';

//services
import {carrinho, updateCarrinho} from '../../services/carrinho';


function Carrinho(props) {
    const [emptycart, setemptycart] = useState(true);

    useEffect(() => {
        if (carrinho.length === 0) {
            setemptycart(true)
        } else {
            setemptycart(false)
        }
    }, [])

    return (
        <div className={style.containercart}>
            <div className={style.ttlcart}><span>Cart</span></div>
            <hr />
            <div className={style.carrinho}>
                {emptycart ? (
                    <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}><span>Your cart is empty.</span></div>
                ) : (
                    carrinho.map((item, index) => (
                        <ProdutoCarrinho key={index} item={item} />
                    ))
                )}
            </div>
            {emptycart === false && (
                <div className={style.containerbtncheckout}><button className={style.btncheckout}>Checkout</button></div>
            )}
        </div>
    )
}
export default Carrinho