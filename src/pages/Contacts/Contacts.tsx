import React from 'react';
import {useBackButton} from 'local/src/hooks';
import map from './assets/map.jpg';
import styles from './Contacts.module.scss';


export function Contacts() {
    useBackButton();
    return (
        <div>
            <div className={styles.title}>Контакты </div>
            <div className={styles.image}>
                <img src={map} alt=""/>
            </div>
            <div className={styles.subtitle}>Реквизиты</div>
            <div className={styles.description}>
                ИП Муратаева Т. В.<br/><br/>
                Юридический адрес: 191040, Санкт-Петербург, Лиговский проспект,
                д.87, литера А, пом.5-Н (здание &quot;Бизнес центра&quot;),
                1 этаж <br/><br/>
                ИНН 780400254024 <br/><br/>
                ОГРНИП 318784700138809 <br/><br/>
                E-MAIL: SUPPORT@TOBODY.RU
            </div>
            <div className={styles.subtitle}>Адрес магазина</div>
            <div className={styles.description}>
                Санкт-Петербург, Лиговский просп., 87, вход со двора,
                код на домофоне 22В<br/><br/>
                +7 (902) 201-77-20
            </div>
        </div>
    );
}