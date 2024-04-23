//styles
import styleNavBar from './NavBar.module.css';

//imagens
import iconCart from '../../img/icon-cart.svg';
import imgAvatar from '../../img/image-avatar.png';
import iconemenu from '../../img/icon-menu.svg';
import logo from '../../img/logo.svg';


function NavBar(props) {

    const { setMenu } = props;

    return (
        <div className={styleNavBar.container}>
            <div className={styleNavBar.navbar}>
                <div className={styleNavBar.navbar1}>
                    <div className={styleNavBar.containerlogo}><button onClick={()=> setMenu(true)} className={styleNavBar.btniconemenu}><img src={iconemenu} alt="" /></button><div><img src={logo} alt="" /></div></div>
                    <div className={styleNavBar.containermenu}>
                        <button className={styleNavBar.btnmenunavbar}>Collections</button>
                        <button className={styleNavBar.btnmenunavbar}>Men</button>
                        <button className={styleNavBar.btnmenunavbar}>Women</button>
                        <button className={styleNavBar.btnmenunavbar}>About</button>
                        <button className={styleNavBar.btnmenunavbar}>Contact</button>
                    </div>
                    <div className={styleNavBar.opperfilnavbar}>
                        <button className={styleNavBar.btnmenunavbarcart}><img style={{ width: "100%" }} src={iconCart} alt="" /></button>
                        <div className={styleNavBar.btnperfilnavbar}><img className={styleNavBar.imgperfil} style={{ width: "100%" }} src={imgAvatar} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar