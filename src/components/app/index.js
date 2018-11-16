import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import asyncComponent from '../Async/Async'
const AsyncHome = asyncComponent(() => import("../Home"));
const AsyncList = asyncComponent(() => import("../List"));
const AsyncJourney = asyncComponent(() => import("../Journey"));

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="is-active">Journey</NavLink>
          </li>
          <li>
            <NavLink to="/list" exact={true} activeClassName="is-active">List</NavLink>
          </li>
          <li>
            <NavLink to="/home" exact={true} activeClassName="is-active">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Route exact path="/" component={AsyncJourney} />
      <Route exact path="/list" component={AsyncList} />
      <Route exact path="/home" component={AsyncHome} />
    </main>
  </div>
)

export default App
