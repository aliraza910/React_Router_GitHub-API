import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/ContactUs/ContactUs';
import App from './App';
import User from './components/User/User';
import Github  from './components/Github/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />
      <Route 
      // loader={githubInfo}
      path="/github" 
      element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
