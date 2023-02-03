import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Demande_rechargement } from './pages/Demande_rechargement';
import Login from './pages/Login';
import  ListeEnchere from './pages/ListeEnchere';
import FicheEnchere from './pages/FicheEnchere';
import Historique from './pages/Historique';
import Recherche from './pages/Recherche';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListeEnchere />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demanderechargement" element={<Demande_rechargement />} />
        <Route path="/ListeEnchere" element={<ListeEnchere />} />
        <Route path="/FicheEnchere" element={<FicheEnchere />} />
        <Route path="/Historique" element={<Historique />} />
        <Route path="/Recherche" element={<Recherche />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
