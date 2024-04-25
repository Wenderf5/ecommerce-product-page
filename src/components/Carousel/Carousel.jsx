import { useState } from 'react';

//styles
import style from './Carousel.module.css';

//imagens
import imgproduto1 from '../../assets/img/image-product-1.jpg';
import imgproduto2 from '../../assets/img/image-product-2.jpg';
import imgproduto3 from '../../assets/img/image-product-3.jpg';
import imgproduto4 from '../../assets/img/image-product-4.jpg';

import iconleft from '../../assets/img/chevron-left-regular-24.png';
import iconright from '../../assets/img/chevron-right-regular-24.png';

function Carousel() {
    const img = [
        imgproduto1,
        imgproduto2,
        imgproduto3,
        imgproduto4
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    };

    return (
        <div className={style.container}>
            <div className={style.container1}>
                <button className={style.btn} onClick={prevSlide}><img src={iconleft } alt="" /></button>
            </div>
            <img className={style.imgprincipal} src={img[currentIndex]} alt="" />
            <div className={style.container2}>
                <button className={style.btn} onClick={nextSlide}><img src={iconright} alt="" /></button>
            </div>
        </div>
    );
}

export default Carousel;
