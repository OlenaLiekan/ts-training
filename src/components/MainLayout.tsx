import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout: FC = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    );
}

export default MainLayout;