import React, { FC } from 'react';
import axios from 'axios';
import { IUser } from '../../types/types';
import List from '../../components/List';
import UserItem from '../../components/UserItem';

const UserPage: FC = () => {
    const [users, setUsers] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
    );
}

export default UserPage;