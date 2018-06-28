import { h } from 'preact'

const Drawer = () => (
  <div class="Drawer">
    <nav class="Drawer__nav">
      <div class="Drawer__inner">
        <ul className="Drawer__menus">
          <li>hoge</li>
        </ul>
      </div>
    </nav>
    <div class="Drawer__backdrop" />
  </div>
)

export default Drawer
