//styles
import style from './NavBar.module.css';

//imagens
import iconCart from '../../assets/img/icon-cart.svg';
import imgAvatar from '../../assets/img/image-avatar.png';
import iconemenu from '../../assets/img/icon-menu.svg';
import logo from '../../assets/img/logo.svg';

//Componentes
import Carrinho from '../Carrinho/Carrinho';

//Hooks
import { useEffect, useState } from 'react';


function NavBar(props) {
    const {setMenu} = props;
    const [carrinho, setcarrinho] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.navbar}>
                <div className={style.navbar1}>
                    <div className={style.containerlogo}><button onClick={() => setMenu(true)} className={style.btniconemenu}><img src={iconemenu} alt="" /></button><div><img src={logo} alt="" /></div></div>
                    <div className={style.containermenu}>
                        <button className={style.btnmenunavbar}>Collections</button>
                        <button className={style.btnmenunavbar}>Men</button>
                        <button className={style.btnmenunavbar}>Women</button>
                        <button className={style.btnmenunavbar}>About</button>
                        <button className={style.btnmenunavbar}>Contact</button>
                    </div>
                    <div className={style.opperfilnavbar}>
                        <div className={style.divcart}>
                            <button onClick={() => setcarrinho(!carrinho)} className={style.btnmenunavbarcart}><img src={iconCart} alt="" /></button>
                            {carrinho && (
                                <Carrinho/>
                            )}
                        </div>
                        <div className={style.btnperfilnavbar}><img className={style.imgperfil} style={{ width: "100%" }} src={imgAvatar} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar