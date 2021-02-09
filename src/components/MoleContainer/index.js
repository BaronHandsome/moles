import React from 'react';
import style from './MoleContainer.module.css';
import { useContext } from 'react';
import { Context } from '../../containers'

export function MoleContainer() {
    const increaseScore = useContext(Context);

    return (
        <div onClick={() => increaseScore()} className={style.moleContainer}>
            <span>Im a mole</span>
        </div>
    )
}

{/* <div onClick={() => increaseScore()} className={style.moleContainer}>
{
    mole ? (
        <span>Я крот</span>
    ) : (
            <span>Я крот</span>
        )
}
</div> */}




