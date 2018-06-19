import { h } from 'preact'
import Router, { Route } from 'preact-router'
import Header from '../Header'
import HellowWorld from '../HelloWorld'

const App = () => (
  <div id="MyApp">
    <Header />
    <Router>
      <Route path="/" component={HellowWorld} />
    </Router>
  </div>
)

export default App
