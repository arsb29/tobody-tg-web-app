import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';
import {ProductType} from 'local/src/products';


type Props = {
    products: ProductType[]
}

export function Products(props: Props) {
    const {products} = props;
    return (
        <div className={styles.layout}>
            {products.map(({id, title, images, price}) => (
                <Link to={`/product/${id}`} key={id} className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src={images[0]} alt=""/>
                    </div>
                    <div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.price}>{price} ₽</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
