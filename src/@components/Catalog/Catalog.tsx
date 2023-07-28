import React from 'react';
import {useBackButton} from 'local/src/hooks'
import {Products} from 'local/src/@components/Products';
import {products} from 'local/src/products';
import styles from './Catalog.module.scss';


export function Catalog() {
    useBackButton();
    return (
        <>
            <div className={styles.title}>Каталог</div>
            <Products products={products} />
        </>
    );
}
