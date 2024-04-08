import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import MainLayout from './components/MainLayout';
import UserItemPage from './pages/UserItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<HomePage />} />
          <Route path='users' element={<UserPage />} />
          <Route path='users/:id' element={<UserItemPage />} />
          <Route path='todos' element={<TodoPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
