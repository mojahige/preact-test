import { h } from 'preact'
import { Router } from 'preact-router'
import HellowWorld from './HelloWorld'

const App = () => (
  <div id="MyApp">
    <Router>
      <HellowWorld path="/" />
    </Router>
  </div>
)

export default App
