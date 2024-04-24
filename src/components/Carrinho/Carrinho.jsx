//styles
import style from './Carrinho.module.css';

//components
import ProdutoCarrinho from '../ProdutoCarrinho/ProdutoCarrinho';

//stados
import { useState } from 'react';

//services
import carrinho from '../../services/carrinho';


function Carrinho() {

    return (
        <div className={style.containercart}>
            <div className={style.ttlcart}><span>Cart</span></div>
            <hr />
            <div className={style.carrinho}>
                {carrinho.map((item, index)=>(
                        <ProdutoCarrinho key={index} item={item} />
                    ))}
            </div>
            <div className={style.containerbtncheckout}><button className={style.btncheckout}>Checkout</button></div>
        </div>
    )
}
export default Carrinho