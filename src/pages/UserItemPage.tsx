import React, { FC } from 'react';
import { IUser } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {
    
    const [user, setUser] = React.useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='users__item item-users'>
            <h1 className='item-users__title'>User Page</h1>
            <div className="item-users__info">
                <div>NAME: {user?.username}</div>
                <div>EMAIL: {user?.email}</div>
                <div>ADDRESS: {user?.address.city} {user?.address.street} {user?.address.zipcode}</div>                
            </div>
            <button className='item-users__btn' onClick={() => navigate('/users')}>Back to users</button>
        </div>
    );
};

export default UserItemPage;