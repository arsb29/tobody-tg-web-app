import React from 'react';
import {useBackButton} from 'local/src/hooks';
import certificate from './assets/certificate.png';
import styles from './Certificate.module.scss';


export function Certificate() {
    useBackButton();
    return (
        <div>
            <div className={styles.title}>Сертификаты</div>
            <div className={styles.image}>
                <img src={certificate} alt=""/>
            </div>
            <div className={styles.description}>
                В продаже доступны подарочные сертификаты любого номинала от
                5000₽<br/><br/>Срок действия сертификата - 6 месяцев
            </div>
        </div>
    );
}