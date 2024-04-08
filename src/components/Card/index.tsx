import React, {FC} from 'react';
import style from './Card.module.scss';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
}

const Card: FC<CardProps> = ({width, height, variant, children}) => {
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '2px solid #a2abffd0' : 'none',
            background: variant === CardVariant.primary ? '#a2abffd0' : 'none'}}
            className={style.card}
        >
           {children}
        </div>
    )
}

export default Card;