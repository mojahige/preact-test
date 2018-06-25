import { h } from 'preact'
import Router, { Route } from 'preact-router'
import Header from '../Header'
import HellowWorld from '../HelloWorld'
import AlertIcon from 'mdi-preact/AlertIcon'
import { Button } from 'preact-mdl'

const App = () => (
  <div id="MyApp">
    <Header />
    <Button>
      <AlertIcon />
      hoge
    </Button>
    <Router>
      <Route path="/" component={HellowWorld} />
    </Router>
  </div>
)

export default App
