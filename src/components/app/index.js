import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import asyncComponent from '../Async/Async'
const AsyncHome = asyncComponent(() => import("../Home"));
const AsyncAbout = asyncComponent(() => import("../About"));

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact={true} activeClassName="is-active">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/about" component={AsyncAbout} />
    </main>
  </div>
)

export default App
