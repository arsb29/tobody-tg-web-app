import React from 'react';
import {useBackButton} from 'local/src/hooks';
import styles from './Delivery.module.scss';


export function Delivery() {
    useBackButton();
    return (
        <div>
            <div className={styles.title}>Доставка</div>
            <div className={styles.subtitle}>
                Бесплатная доставка по России
            </div>
            <div className={styles.description}>
                Мы доставляем нашу продукцию по России, в страны СНГ и по
                всему МИРУ! Вы можете воспользоваться услугой курьера с
                доставкой на дом или забрать заказ самостоятельно из
                ближайшего пункта выдачи в удобное для вас время.
                <br/><br/>
                Для доставки по Миру стоимость и сроки расчитываются в
                индивидуальном порядке. Мы работаем с курьерской службой
                СДЭК, Почтой России.
            </div>
            <div className={styles.subtitle}>Оплата</div>
            <div className={styles.description}>
                Для оплаты мы используем удобный сервис PayKeeper, где вы
                можете оплатить заказ следующими способами: Банковской
                картой (VISA Inc, MasterCard WorldWide, МИР)
            </div>
        </div>
    );
}