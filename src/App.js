import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import NavBar from "./components/Navbar";
import Home from './pages/Home';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFound from './pages/NotFound';

const App = () => (
    <Router>
      <NavBar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/news" element={<NewsListPage/>} />
        <Route path="/news/:id" element={<NewsDetailPage/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
);

export default App;