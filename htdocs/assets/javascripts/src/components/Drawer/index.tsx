import { h } from 'preact'

interface Props {
  isOpened?: boolean
  onClickBackdrop?: (e: MouseEvent) => void
}

const Drawer = ({ isOpened, onClickBackdrop }: Props) => (
  <div class={isOpened ? 'Drawer -opened' : 'Drawer'}>
    <nav class="Drawer__nav">
      <div class="Drawer__inner">
        <ul className="Drawer__menus">
          <li>hoge</li>
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
