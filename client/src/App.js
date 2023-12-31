import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Stats from './pages/Stats';
import Classement from './pages/Classement';
import Parier from './pages/Parier';
import Match from './pages/Match';

const NotFound = () => {
  return <Navigate to="/" />;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes basename="Berlioz-betting-cup">
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profil" element={<Profil />} />
          <Route path="/dashboard/stats" element={<Stats />} />
          <Route path="/dashboard/classement" element={<Classement />} />
          <Route path="/dashboard/parier" element={<Parier />} />
          <Route path="/matchs/:id" element={<Match />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
