import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddSubscriber from './components/Addsubscriber';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddSubscriber />} />
          <Route path="/view" element={<ViewSubscribers />} />
          <Route path="/search" element={<SearchSubscriber />} />
          <Route path="/delete" element={<DeleteSubscriber />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
