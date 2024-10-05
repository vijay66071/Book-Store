import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import AiApp from './AiChat/AiApp.jsx';
import {AuthProvider} from './contects/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router = {router} />
      <AiApp/>
    </AuthProvider>
  </React.StrictMode>
);
