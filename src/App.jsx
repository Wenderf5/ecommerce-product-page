//styles
import style from './App.module.css';

//components
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';

//imagens
import imgproduto1 from './assets/img/image-product-1.jpg';
import imgproduto2 from './assets/img/image-product-2.jpg';
import imgproduto3 from './assets/img/image-product-3.jpg';
import imgproduto4 from './assets/img/image-product-4.jpg';
import btnmenuclose from './assets/img/icon-close.svg';

//Hooks
import { useState } from 'react';

//services
import produtosloja from './services/produtosloja';
import classproduto from './services/addcarrinho';
import {carrinho, updateCarrinho } from './services/carrinho';

function App() {
  const [Menu, setMenu] = useState(false);
  const [Quantidade, setQuantidade] = useState(1);
  const [ftp, setftp] = useState(imgproduto1);

  function addcarrinho() {
    const Newproduct = new classproduto(produtosloja[0].id, produtosloja[0].titulo, produtosloja[0].desc, produtosloja[0].preco, produtosloja[0].desconto, Quantidade);
    const produtoExistente = carrinho.find(item => item.id === produtosloja[0].id);
    if (produtoExistente) {
      produtoExistente.quantidade += Quantidade
    } else {
      updateCarrinho(Newproduct)
    }
  }

  return (
    <div>
      <div className={Menu ? style.menu1 : style.menu0}>
        <button className={style.btnmenunavbarclose} onClick={() => setMenu(false)}><img src={btnmenuclose} alt="" /></button>
        <button className={style.btnmenunavbar}>Collections</button>
        <button className={style.btnmenunavbar}>Men</button>
        <button className={style.btnmenunavbar}>Women</button>
        <button className={style.btnmenunavbar}>About</button>
        <button className={style.btnmenunavbar}>Contact</button>
      </div>
      <div className={style.navbar}><NavBar setMenu={setMenu}/></div>
      <div className={style.container}>
        <div className={style.containercenter}>
          <div className={style.containerprincipal}>
            <div className={style.containerfotosproduto}>
              <div className={style.containerfotos}>
                <div className={style.containerfoto}>
                  <img className={style.imgprincipal} src={ftp} alt="" />
                  <Carousel/>
                </div>
                <div className={style.containerfotos1}>
                  <div onClick={() => setftp(imgproduto1)} className={style.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgproduto1} alt="" /></div>
                  <div onClick={() => setftp(imgproduto2)} className={style.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgproduto2} alt="" /></div>
                  <div onClick={() => setftp(imgproduto3)} className={style.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgproduto3} alt="" /></div>
                  <div onClick={() => setftp(imgproduto4)} className={style.previews}><img style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "2px", boxShadow: " 1px 1px 10px rgb(172, 172, 172)" }} src={imgproduto4} alt="" /></div>
                </div>
              </div>
            </div>
            <div className={style.containerinfoproduto}>
              <div className={style.txt1}><span style={{ fontSize: "1.3rem", color: "#ff7d1b" }}>Sneaker Company</span></div>
              <div className={style.ttl1}><span>{produtosloja[0].titulo}</span></div>
              <div className={style.txt2}><span>{produtosloja[0].desc}</span></div>
              <div className={style.containerpreco1}>
                <div className={style.containerpreco}>
                  <span>$</span>
                  <span>&nbsp;</span>
                  <span>{(produtosloja[0].preco - (produtosloja[0].preco * produtosloja[0].desconto / 100))}</span>
                  <div className={style.desconto}><span>{produtosloja[0].desconto}</span><span>%</span></div>
                </div>
                <div className={style.precocompletodesconto} ><span>$</span><span>&nbsp;</span><span>{produtosloja[0].preco}</span></div>
              </div>
              <div className={style.containeraddcarrinho}>
                <div className={style.containerquantidade}>
                  <button onClick={() => setQuantidade(Quantidade > 1 ? Quantidade - 1 : 1)} style={{ color: "#ff7d1b", border: "none", background: "none", fontSize: "2rem", cursor: "pointer" }}>-</button>
                  <span style={{ color: "black" }}>{Quantidade}</span>
                  <button onClick={() => setQuantidade(Quantidade + 1)} style={{ color: "#ff7d1b", border: "none", background: "none", fontSize: "1.3rem", cursor: "pointer" }}>+</button>
                </div>
                <button className={style.btnaddtocart} onClick={addcarrinho}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={style.footer}></footer>
    </div>
  )
}
export default App