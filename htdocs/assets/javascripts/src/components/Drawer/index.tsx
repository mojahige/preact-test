import { h } from 'preact'
import { Link } from 'preact-router/match'

interface Props {
  isOpened?: boolean
  onClickBackdrop?: () => void
}

const Drawer = ({ isOpened, onClickBackdrop }: Props) => (
  <div class={isOpened ? 'Drawer -opened' : 'Drawer'}>
    <nav class="Drawer__nav">
      <div class="Drawer__inner">
        <ul className="Drawer__menus">
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
    <div class="Drawer__backdrop" onClick={onClickBackdrop} />
  </div>
)

export default Drawer
