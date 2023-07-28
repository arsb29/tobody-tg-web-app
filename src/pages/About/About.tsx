import React from 'react';
import {useBackButton} from 'local/src/hooks';
import about from './assets/about.jpg';
import styles from './About.module.scss';


export function About() {
    useBackButton();
    return (
        <div>
            <div className={styles.title}>TO BODY</div>
            <div className={styles.image}>
                <img src={about} alt=""/>
            </div>
            <div className={styles.description}>
                TO BODY — Петербургский бренд комфортной оверсайз одежды.<br/>
                <br/>Наш девиз — Life is a Journey.Компания открылась весной
                2020 года, в самый разгар пандемии.<br/><br/>
                Именно эта ситуация в мире смотивировала Александра Муратаева
                на создание бренда удобной и повседневной одежды, историей
                развития которого, он с радостью делился и делится по сей
                день на своем YouTube-канале &ldquo;Бизнес с нуля&rdquo;.
            </div>
        </div>
    );
}