//styles
import styleNavBar from './NavBar.module.css';

//imagens
import iconCart from '../../assets/img/icon-cart.svg';
import imgAvatar from '../../assets/img/image-avatar.png';
import iconemenu from '../../assets/img/icon-menu.svg';
import logo from '../../assets/img/logo.svg';

//Componentes
import ProdutoCarrinho from '../ProdutoCarrinho/ProdutoCarrinho';

//Hooks
import { useState } from 'react';

function NavBar(props) {

    const [Carrinho, setCarrinho] = useState(false);

    const { setMenu } = props;

    return (
        <div className={styleNavBar.container}>
            <div className={styleNavBar.navbar}>
                <div className={styleNavBar.navbar1}>
                    <div className={styleNavBar.containerlogo}><button onClick={() => setMenu(true)} className={styleNavBar.btniconemenu}><img src={iconemenu} alt="" /></button><div><img src={logo} alt="" /></div></div>
                    <div className={styleNavBar.containermenu}>
                        <button className={styleNavBar.btnmenunavbar}>Collections</button>
                        <button className={styleNavBar.btnmenunavbar}>Men</button>
                        <button className={styleNavBar.btnmenunavbar}>Women</button>
                        <button className={styleNavBar.btnmenunavbar}>About</button>
                        <button className={styleNavBar.btnmenunavbar}>Contact</button>
                    </div>
                    <div className={styleNavBar.opperfilnavbar}>
                        <div className={styleNavBar.divcart}>
                            <button onClick={() => setCarrinho(!Carrinho)} className={styleNavBar.btnmenunavbarcart}><img style={{ width: "100%" }} src={iconCart} alt="" /></button>
                            {Carrinho && (
                                <div className={styleNavBar.containercart}>
                                    <div className={styleNavBar.ttlcart}><span>Cart</span></div>
                                    <hr />
                                    <div className={styleNavBar.carrinho}>
                                        <ProdutoCarrinho />
                                    </div>
                                    <div className={styleNavBar.containerbtncheckout}><button className={styleNavBar.btncheckout}>Checkout</button></div>
                                </div>
                            )}
                        </div>
                        <div className={styleNavBar.btnperfilnavbar}><img className={styleNavBar.imgperfil} style={{ width: "100%" }} src={imgAvatar} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar