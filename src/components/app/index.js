import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" exact={true} activeClassName="is-active">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
