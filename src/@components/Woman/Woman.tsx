import React, {useMemo} from 'react';
import {useBackButton} from 'local/src/hooks'
import {Products} from 'local/src/@components/Products';
import {products} from 'local/src/products';
import styles from './Woman.module.scss';


export function Woman() {
    useBackButton();
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
