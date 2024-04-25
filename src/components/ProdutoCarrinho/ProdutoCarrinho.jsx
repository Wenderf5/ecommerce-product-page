import style from './ProdutoCarrinho.module.css';

//imagens
import img from  "../../assets/img/image-product-1-thumbnail.jpg";
import imgicondelete from '../../assets/img/icon-delete.svg';

//services
import {carrinho, updateCarrinho} from '../../services/carrinho';

function ProdutoCarrinho(props){
    const { index } = props;

    function deletaritemcarrinho(){
        carrinho.splice(index, 1)
    }

    return(
        <div className={style.container}>
            <div className={style.containerimg}><img style={{width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px"}} src={img} alt="" /></div>
            <div className={style.containerinfocart}>
                <div className={style.titulo}><span>{props.item.titulo}</span></div>
                <div className={style.preco}>
                    <span>$</span>
                    <span>{props.item.preco - (props.item.preco * props.item.desconto / 100)}</span>
                    <span>&nbsp;</span>
                    <span>x</span>
                    <span>{props.item.quantidade}</span>
                    <span>&nbsp;</span>
                    <span>$</span>
                    <span>{(props.item.preco - (props.item.preco * props.item.desconto / 100)) * props.item.quantidade}</span>
                </div>
            </div>
            <div className={style.btnexcluircart}><button className={style.btndelete} onClick={deletaritemcarrinho}><img src={imgicondelete} alt="" /></button></div>
        </div>
    )
}
export default ProdutoCarrinho