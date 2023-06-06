import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Ajoutez ici d'autres routes pour d'autres composants */}
      </Routes>
    </Router>
  );
}

export default App;
