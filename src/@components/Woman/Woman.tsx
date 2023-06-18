import React, {useMemo} from 'react';
import {Products} from '../Products';
import {products} from '../../products';
import styles from './Woman.module.scss';


export function Woman() {
    const femaleProducts = useMemo(() => (
        products.filter(({gender}) => gender === 'female')
    ), []);
    return (
        <>
            <div className={styles.title}>Женское</div>
            <Products products={femaleProducts} />
        </>
    );
}
