// C:\Users\Admin\srp-education-app-website\src\App.jsx (or App.js)
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes/index.jsx';

export default function App() {
  const element = useRoutes(appRoutes);
  
  return (
    <>
      {element}
    </>
  );
}
