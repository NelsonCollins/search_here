import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
    //BEM

    <div className="app">

    <Router>
        <Switch>
        {/*Search page - Search result page */}
          <Route path="/search">
            <SearchPage />
          </Route>
           {/*Home page - with the search icon */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
