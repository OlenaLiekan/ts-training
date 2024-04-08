import React, { FC } from 'react';
import axios from 'axios';
import List from '../../components/List';
import TodoItem from '../../components/TodoItem';
import { ITodo } from '../../types/types';

const TodoPage: FC = () => {

    const [todos, setTodos] = React.useState<ITodo[]>([]);

    React.useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}/>
    );
};

export default TodoPage;