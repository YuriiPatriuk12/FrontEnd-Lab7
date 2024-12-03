import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Task1Page from './Task1Page';
import Task2Page from './Task2Page';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/task1" element={<Task1Page />} />
                <Route path="/task2" element={<Task2Page />} />
            </Routes>
        </Router>
    );
}

export default App;
