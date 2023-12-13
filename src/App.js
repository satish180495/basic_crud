import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
