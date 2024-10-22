import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ShopPage from './Pages/ShopPage';
import CategoryPage from './Pages/CategoryPage';

// Import your blog components
import BlogCont from './Components/BlogCont';
import BlogDetail from './Components/BlogDetail';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/category/:catogeries' element={<CategoryPage />} />

      {/* Add blog routes without changing existing code */}
      <Route path='/blog' element={<BlogCont />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
    </Routes>
  );
};

export default App;