import SamplePage from 'pages/SampleApp/SamplePage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


export default function Router() {
  return (
    <Routes>
      <Route
        path='/sample'
        element={<SamplePage />}
        exact
      />
      <Route path='/' element={<Navigate to='/sample' replace />} />
      <Route path='*' element={<Navigate to='/404' replace />} />
    </Routes>
  );
}
