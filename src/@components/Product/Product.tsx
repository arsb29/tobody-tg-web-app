import React from 'react';
import { useParams} from 'react-router-dom';
import {products} from '../../products';
import styles from './Product.module.scss';

export function Product() {
    const {productId} = useParams();
    const product = products.find(({id}) => id === productId);
    if (!product) return null;
    const {images, price, title} = product;
    return (
        <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.image}>
                <img src={images[0]} alt=""/>
            </div>
            <div className={styles.info}>
                <div className={styles.article}>Артикул: 0033275</div>
                <div className={styles.price}>{price} ₽</div>
            </div>
            <div className={styles.description}>
                Костюм выполнен из премиального футера с эффектом
                «soft touch» — это ткань с велюровым покрытием,
                мягкая и приятная на ощупь.
            </div>
            <button className={styles.button}>Заказать</button>
        </div>
    );
}
