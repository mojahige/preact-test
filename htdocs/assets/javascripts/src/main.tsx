import { h, render } from 'preact'
import App from './components/App'

function appInit() {
  const appRoot = document.getElementById('appRoot')

  if (appRoot) {
    console.log('😆')
    render(<App />, appRoot)
  }
}

document.addEventListener('DOMContentLoaded', appInit)
