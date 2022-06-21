import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
import SearchWeather from './component/SearchWeather'
import { ForcastWeather } from './component/ForcastWeather';
import { ErrorFallback } from './component/ErrorFallback';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchWeather/>} />
          <Route exact path="/forecast" element={<ForcastWeather/>} />
        </Routes>
      </Router>
    </ErrorBoundary>

  );
}

export default App;
