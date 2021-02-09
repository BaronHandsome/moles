import React, { useState } from 'react';
import style from './PlayableWindow.module.css';
import { MoleContainer } from '../../components/MoleContainer';


export function PlayableWindow() {
    const [molePositionIndex, setMolePositionIndex] = useState(null);
    const [holes, setHoles] = useState([]);


    setHoles([
        {
            moleState: false,
        },
        {
            moleState: true,
        },
        {
            moleState: true,
        },
        {
            moleState: false,
        },
        {
            moleState: false,
        },
        {
            moleState: false,
        }
    ]);

    const getRandomNumber = () => {
        return (Math.floor(Math.random() * 7) + 1);
    };

    function changeMolePosition(params) {
        if (molePositionIndex) {
            moleBlocks.push(holes[molePositionIndex]);
        };
        const newMolePositionIndex = getRandomNumber();
        setMolePositionIndex(newMolePositionIndex);
    };


    return (
        <div className={style.mainContainer}>
            {moleBlocks}
        </div>
    );
};