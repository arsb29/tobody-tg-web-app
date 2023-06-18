import React from 'react';
import {Products} from '../Products';
import {products} from '../../products';
import styles from './Catalog.module.scss';


export function Catalog() {
    return (
        <>
            <div className={styles.title}>Каталог</div>
            <Products products={products} />
        </>
    );
}
