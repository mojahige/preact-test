import { h } from 'preact'
import Drawer from '../Drawer'

const Header = () => (
  <header class="Header">
    <div class="Header__inner">
      <h1>Hello</h1>

      <button type="button" class="Header__drawerButton">
        <i class="material-icons" aria-hidden="true">
          menu
        </i>
      </button>
    </div>

    <Drawer />
  </header>
)

export default Header
