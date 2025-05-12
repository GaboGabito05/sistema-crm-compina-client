import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Bento from './components/Bento';
import Mobile from './components/Mobile';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      {isDesktop ? (
        <>
          <Navbar />
          <Bento />
        </>
      ) : (
        <Mobile />
      )}
    </main>
  );
}

export default App;
