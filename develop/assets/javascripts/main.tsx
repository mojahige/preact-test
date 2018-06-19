import { h, render } from 'preact'
import App from '../javascripts/components/App/index'

import 'ress'
import 'preact-material-components/style.css'

function appInit() {
  const appRoot = document.getElementById('appRoot')

  if (appRoot) {
    render(<App />, appRoot)
  }
}

document.addEventListener('DOMContentLoaded', appInit)
