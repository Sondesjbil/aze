import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} /> {/* Correction du chemin */}
          <Route path="/register" element={<Register />} /> {/* Correction du chemin */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
