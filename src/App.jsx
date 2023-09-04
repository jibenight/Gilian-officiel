import { useEffect } from 'react';
import HomePage from './components/home/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    function setVH() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Ajustez la valeur dès que la fenêtre est chargée
    setVH();

    // Mettez à jour la valeur quand la fenêtre est redimensionnée
    window.addEventListener('resize', setVH);

    return () => {
      // Supprimez l'écouteur d'événement lors du nettoyage
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
