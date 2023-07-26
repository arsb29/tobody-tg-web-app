import React from 'react';
import {useBackButton} from '../../hooks'
import {Products} from '../Products';
import {products} from '../../products';
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
