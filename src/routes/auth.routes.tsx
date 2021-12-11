import { Routes, Route } from 'react-router';

import { Auth } from '../pages/Auth';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
    </Routes>
  );
};
