import { h } from 'preact'
import Router from 'preact-router'
import Header from '../Header'
import Drawer from '../Drawer'
import Hello from '../Hello'
import Profile from '../Profile'
// import AlertIcon from 'mdi-preact/AlertIcon'
// import { Button } from 'preact-mdl'

const App = () => (
  <div id="layout" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <Drawer />
    <main class="mdl-layout__content">
      <Router>
        <Hello path="/" />
        <Profile path="/profile" />
      </Router>
    </main>
  </div>
)

export default App
