import { h, render } from 'preact'
import HelloWorld from '../javascripts/components/HelloWorld'

import 'ress'
import 'preact-material-components/style.css'

function appInit() {
  const appRoot = document.getElementById('appRoot')

  if (appRoot) {
    render(<HelloWorld />, appRoot)
  }
}

document.addEventListener('DOMContentLoaded', appInit)
