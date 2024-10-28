import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Navbar from './layout/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './layout/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/error/NotFound';

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname.startsWith('/Auth');

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Auth/Login' element={<Login />} />
        <Route path='/Auth/Register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default App;
