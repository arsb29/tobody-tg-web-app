import React, {useMemo} from 'react';
import {useBackButton} from 'local/src/hooks'
import {Products} from 'local/src/pages/Products';
import {products} from 'local/src/products';
import styles from './Man.module.scss';


export function Man() {
    useBackButton();
    const maleProducts = useMemo(() => (
        products.filter(({gender}) => gender === 'male')
    ), []);
    return (
        <>
            <div className={styles.title}>Мужское</div>
            <Products products={maleProducts} />
        </>
    );
}
