import React, {useMemo} from 'react';
import {useBackButton} from '../../hooks'
import {Products} from '../Products';
import {products} from '../../products';
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
