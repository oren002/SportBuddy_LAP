import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Register from './pages/register';
import Home from './pages/home';
import PastActivities from './pages/pastActivities';
import MyActivities from './pages/myActivities';
import SearchActivities from './pages/searchActivities';
import Favorites from './pages/favorites';
import CreateActivity from './pages/createActivity';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pastActivities" element={<PastActivities />} />
        <Route path="/myActivities" element={<MyActivities />} />
        <Route path="/searchActivities" element={<SearchActivities />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/createActivity" element={<CreateActivity />} />
    </Routes>
  );
}

export default App;
