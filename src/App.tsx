import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MyDrawer from './common/components/app-drawer/drawer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box className="flex">
      <CssBaseline />
      <MyDrawer />
      <Box sx={{
        width: '100%',
        height: '100vh',
        padding: 2,
      }}>
        <Outlet />
      </Box>

    </Box>
  );
}

export default App;
