import React from 'react';
import { Link } from "react-router-dom";
import about from './assets/about.jpg';
import man from './assets/man.jpg';
import woman from './assets/woman.jpg';
import contacts from './assets/contacts.jpg';
import delivery from './assets/delivery.jpg';
import catalog from './assets/catalog.jpg';
import certificate from './assets/certificate.jpg';
import styles from './Shop.module.scss';


const items = [
    {text: 'Каталог', image: catalog, href: '/catalog'},
    {text: 'Мужское', image: man, href: '/man'},
    {text: 'Женское', image: woman, href: '/woman'},
    {text: 'О нас', image: about, href: '/about'},
    {text: 'Сертификаты', image: certificate, href: '/certificate'},
    {text: 'Доставка', image: delivery, href: '/delivery'},
    {text: 'Контакты', image: contacts, href: '/contacts'}
];


export function Shop() {
    return (
        <div className={styles.layout}>
            {items.map(({text, image, href}) => (
                <Link to={href} key={text} className={styles.card}>
                    <img src={image} alt=""/>
                    <div className={styles.text}>{text}</div>
                </Link>
            ))}
        </div>
    );
}