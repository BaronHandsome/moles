import React from 'react';
import style from './InfoWindow.module.css';

export function InfoWindow({ gameDifficult, currentScore, quantityFailes, attemptTime }) {
    return(
        <div className={style.mainContainer}>
            <p className={style.title}>Status bar</p>
            <span className={style.text}>Game difficult: {gameDifficult}</span>
            <span className={style.text}>Score: {currentScore} / 100 point(s)</span>
            <span className={style.text}>You failed: {quantityFailes} times(s)</span>
            <span className={style.text}>Time: {attemptTime} ms</span>
        </div>
    );
};