import { h } from 'preact'
import Router from 'preact-router'
import Header from '../Header'
import Hello from '../Hello'
import Profile from '../Profile'

const App = () => (
  <div>
    <Header />
    <main>
      <Router>
        <Hello path="/" />
        <Profile path="/profile" />
      </Router>
    </main>
  </div>
)

export default App
