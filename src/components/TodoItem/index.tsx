import React, { FC } from 'react';
import { ITodo } from '../../types/types';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <li>
            <input className={styles.checkbox} type="checkbox"/>
            {todo.id}. {todo.title}
        </li>
    );
};

export default TodoItem;