import { h } from 'preact'
import { Link } from 'preact-router/match'

const Drawer = () => (
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <Link class="mdl-navigation__link" activeClassName="active" href="/">
        Home
      </Link>
      <Link
        class="mdl-navigation__link"
        activeClassName="active"
        href="/profile"
      >
        Profile
      </Link>
    </nav>
  </div>
)

export default Drawer
