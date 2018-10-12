import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import asyncComponent from '../Async/Async'
const AsyncHome = asyncComponent(() => import("../Home"));
const AsyncList = asyncComponent(() => import("../List"));

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/list" exact={true} activeClassName="is-active">List</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/list" component={AsyncList} />
    </main>
  </div>
)

export default App
