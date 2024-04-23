//styles
import styleProdutoCarrinho from './ProdutoCarrinho.module.css';

//imagens
import img from  "../../assets/img/image-product-1-thumbnail.jpg";
import imgicondelete from '../../assets/img/icon-delete.svg';

function ProdutoCarrinho(){
    return(
        <div className={styleProdutoCarrinho.container}>
            <div className={styleProdutoCarrinho.containerimg}><img style={{width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px"}} src={img} alt="" /></div>
            <div className={styleProdutoCarrinho.containerinfocart}>
                <div className={styleProdutoCarrinho.titulo}><span>Fall Limited Edition Sneakers</span></div>
                <div className={styleProdutoCarrinho.preco}>
                    <span>$</span>
                    <span>125,00</span>
                    <span>&nbsp;</span>
                    <span>x</span>
                    <span>3</span>
                    <span>&nbsp;</span>
                    <span>$</span>
                    <span>375,00</span>
                </div>
            </div>
            <div className={styleProdutoCarrinho.btnexcluircart}><button className={styleProdutoCarrinho.btndelete}><img src={imgicondelete} alt="" /></button></div>
        </div>
    )
}
export default ProdutoCarrinho