import { h } from 'preact'
import { Link } from 'preact-router/match'

interface Props {
  isOpened?: boolean
  onClickBackdrop?: () => void
  onClickRouterLink?: (Event) => void
}

const Drawer = ({ isOpened, onClickBackdrop, onClickRouterLink }: Props) => (
  <div class="Drawer" aria-hidden={isOpened ? false : true}>
    <nav class="Drawer__nav">
      <div class="Drawer__inner">
        <ul className="Drawer__menus">
          <li>
            <Link
              activeClassName="-active"
              href="/"
              onClick={onClickRouterLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName="-active"
              href="/profile"
              onClick={onClickRouterLink}
            >
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
