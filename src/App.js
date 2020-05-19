import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Navigation from './components/NavigationBar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NoMatch from './pages/NoMatch'


const App = () => (
  <div className="App">
    <>
      <Navigation />

      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </>
  </div>
)

export default App
