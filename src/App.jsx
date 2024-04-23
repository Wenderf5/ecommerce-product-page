//styles
import styleApp from './App.module.css';

//components
import NavBar from './components/NavBar/NavBar';

//imagens
import imgproduto1 from './assets/img/image-product-1.jpg';
import imgproduto2 from './assets/img/image-product-2.jpg';
import imgproduto3 from './assets/img/image-product-3.jpg';
import imgproduto4 from './assets/img/image-product-4.jpg';
import imgprodutothumbnail1 from './assets/img/image-product-1-thumbnail.jpg';
import imgprodutothumbnail2 from './assets/img/image-product-2-thumbnail.jpg';
import imgprodutothumbnail3 from './assets/img/image-product-3-thumbnail.jpg';
import imgprodutothumbnail4 from './assets/img/image-product-4-thumbnail.jpg';
import btnmenuclose from './assets/img/icon-close.svg';

//Hooks
import { useState } from 'react';

function App() {

  //States
  const [Menu, setMenu] = useState(false);
  const [Quantidade, setQuantidade] = useState(1);

  return (
    <div>
      <div className={Menu ? styleApp.menu1 : styleApp.menu0}>
        <button className={styleApp.btnmenunavbarclose} onClick={()=> setMenu(false)}><img src={btnmenuclose} alt="" /></button>
        <button className={styleApp.btnmenunavbar}>Collections</button>
        <button className={styleApp.btnmenunavbar}>Men</button>
        <button className={styleApp.btnmenunavbar}>Women</button>
        <button className={styleApp.btnmenunavbar}>About</button>
        <button className={styleApp.btnmenunavbar}>Contact</button>
      </div>
      <div className={styleApp.navbar}><NavBar setMenu={setMenu}/></div>
      <div className={styleApp.container}>
        <div className={styleApp.containercenter}>
          <div className={styleApp.containerprincipal}>
            <div className={styleApp.containerfotosproduto}>
              <div className={styleApp.containerfotos}>
                <div className={styleApp.containerfoto}><img className={styleApp.imgprincipal} src={imgproduto1} alt="" /></div>
                <div className={styleApp.containerfotos1}>
                  <div className={styleApp.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgprodutothumbnail1} alt="" /></div>
                  <div className={styleApp.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgprodutothumbnail2} alt="" /></div>
                  <div className={styleApp.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgprodutothumbnail3} alt="" /></div>
                  <div className={styleApp.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgprodutothumbnail4} alt="" /></div>
                </div>
              </div>
            </div>
            <div className={styleApp.containerinfoproduto}>
              <div className={styleApp.txt1}><span style={{ fontSize: "1.3rem", color: "#ff7d1b" }}>Sneaker Company</span></div>
              <div className={styleApp.ttl1}><span>Fall Limited Edition Sneakers</span></div>
              <div className={styleApp.txt2}><span>Fall Limited Edition Sneakers These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</span></div>
              <div className={styleApp.containerpreco1}>
                <div className={styleApp.containerpreco}>
                  <span>$</span>
                  <span>&nbsp;</span>
                  <span>125,00</span>
                  <div className={styleApp.desconto}><span>50</span><span>%</span></div>
                </div>
                <div className={styleApp.precocompletodesconto} ><span>$</span><span>&nbsp;</span><span>250,00</span></div>
              </div>
              <div className={styleApp.containeraddcarrinho}>
                <div className={styleApp.containerquantidade}>
                  <button onClick={()=> setQuantidade(Quantidade > 1 ? Quantidade -1 : 1)} style={{ color: "#ff7d1b", border: "none", background: "none", fontSize: "2rem", cursor: "pointer" }}>-</button>
                  <span style={{ color: "black" }}>{Quantidade}</span>
                  <button onClick={()=> setQuantidade(Quantidade + 1)} style={{ color: "#ff7d1b", border: "none", background: "none", fontSize: "1.3rem", cursor: "pointer" }}>+</button>
                </div>
                <button className={styleApp.btnaddtocart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styleApp.footer}></footer>
    </div>
  )
}
export default App