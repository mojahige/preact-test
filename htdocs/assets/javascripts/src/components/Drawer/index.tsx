import { h } from 'preact'
import { Link } from 'preact-router'
import Match from 'preact-router/match'

interface Props {
  isOpened?: boolean
  onClickBackdrop?: (e: MouseEvent) => void
}

const Drawer = ({ isOpened, onClickBackdrop }: Props) => (
  <div class="Drawer" aria-hidden={isOpened ? false : true}>
    <nav class="Drawer__nav">
      <div class="Drawer__inner">
        <ul className="Drawer__menus">
          <li>
            <Match path="/">
              {({ matches, path, url }) => <pre>{url}</pre>}
            </Match>
          </li>
          <li>
            <Link activeClassName="-active" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="-active" href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="Drawer__backdrop" onClick={onClickBackdrop}>
      <button type="button">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
)

export default Drawer
