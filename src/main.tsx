import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MyProvider } from './context/provider.tsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyProvider>
);
