import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import MainPage from './MainPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<MainPage tipopagina="produto"/>} />
            <Route path="/produto" exact element={<MainPage tipopagina="produto"/>} />
            <Route path="/tipo" element={<MainPage tipopagina="tipo"/>} />
            <Route path="/fornecedor" element={<MainPage tipopagina="fornecedor"/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
