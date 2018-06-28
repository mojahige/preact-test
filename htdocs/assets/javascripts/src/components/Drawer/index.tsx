import { h } from 'preact'

interface Props {
  isOpened?: boolean
  onClickBackdrop?: () => void
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
    <div class="Drawer__backdrop" onClick={onClickBackdrop} />
  </div>
)

export default Drawer
