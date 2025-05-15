import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bento from './components/Bento';
import Mobile from './components/Mobile';
import Docs from './pages/Docs';
import Login from './pages/login';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      {isDesktop ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Bento />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <Mobile />
      )}
    </main>
  );
}

export default App;