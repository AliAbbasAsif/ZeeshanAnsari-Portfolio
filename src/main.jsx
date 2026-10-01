import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Config/AppRouter';
import { Box } from '@mui/material';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>

);