import React, { FC } from 'react';
import { IUser } from '../../types/types';
import { Link } from 'react-router-dom';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <li>
            <Link to={'/users/' + user.id}>
                {user.id}. {user.username} lives in {user.address.city} on {user.address.street} street, zipcode {user.address.zipcode}.
            </Link>
        </li>
    );
};

export default UserItem;

