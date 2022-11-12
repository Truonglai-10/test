import React from 'react'
import  {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'
import RecommendedVideos from './RecommendedVideos'

function App() {

  return (
    <div className="App">
    <Router>
      <Header/>

      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app_page">
            <Sidebar/>
            <SearchPage />
          </div>
        </Route>
        <Route path="/">
          <Header/>
          <div className="app_page">
            <Sidebar/>
            <RecommendedVideos/>
          </div>
        </Route>
      </Switch>
    </Router>

      
      

    </div>
  )
}

export default App
