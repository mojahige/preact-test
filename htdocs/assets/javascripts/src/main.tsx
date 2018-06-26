import 'preact/devtools'
import { h, render } from 'preact'
import App from './components/App'
import 'material-design-lite'

function appInit() {
  const appRoot = document.getElementById('appRoot')

  if (appRoot) {
    console.log('😆')
    render(<App />, appRoot)
  }
}

document.addEventListener('DOMContentLoaded', appInit)
