import { Routes, Route } from 'react-router';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
    </Routes>
  );
};
