import React from 'react';
import style from './List.module.scss';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
    return (
        <ul className={style.itemsList}>
            {props.items.map(props.renderItem)}
        </ul>
    );
};