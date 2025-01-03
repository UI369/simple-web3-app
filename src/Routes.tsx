import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Greeting } from './pages/Greeting';

export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/greeting/:id" element={<Greeting />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};
