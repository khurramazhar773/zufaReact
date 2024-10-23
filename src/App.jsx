import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ShopPage from './Pages/ShopPage';
import CategoryPage from './Pages/CategoryPage';

// Import your blog components
import BlogDetail from './Pages/BlogDetail';
import BlogPage from './Pages/BlogPage';
import CartPage from './Pages/CartPage';
import ProductView from './Pages/ProductView';
import AboutPage from './Pages/AboutPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/product/:id' element={<ProductView />} />
      <Route path='/category/:catogeries' element={<CategoryPage />} />

      {/* Add blog routes without changing existing code */}
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
    </Routes>
  );
};

export default App;