import React, { FC } from 'react';
import style from './Btn.module.scss';

interface Button {
    onClick: () => void;
}

const Btn: FC<Button> = ({onClick}) => {
    return (
        <button className={style.btn} onClick={onClick}>Push me</button>
    );
}

export default Btn;