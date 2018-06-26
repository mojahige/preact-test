import 'preact/devtools'
import { h } from 'preact'
import Router from 'preact-router'
import Header from '../Header'
import Hello from '../Hello'
// import AlertIcon from 'mdi-preact/AlertIcon'
// import { Button } from 'preact-mdl'

const App = () => (
  <div id="layout">
    <Header />
    <main>
      <Router>
        <Hello path="/" />
      </Router>
    </main>
  </div>
)

export default App
