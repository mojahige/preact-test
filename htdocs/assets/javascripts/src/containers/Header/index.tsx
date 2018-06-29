import { h, Component } from 'preact'
import Drawer from '../../components/Drawer'

interface State {
  isOpened: boolean
}

class Header extends Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false
    }
  }

  public componentWillMount() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.state.isOpened && e.keyCode === 27) {
        this.setState({
          isOpened: false
        })
      }
    })
  }

  public emitOnClick(e: MouseEvent) {
    e.preventDefault()

    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  public render() {
    return (
      <header class="Header">
        <div class="Header__inner">
          <h1>Hello</h1>

          <button
            type="button"
            class="Header__drawerButton"
            onClick={() => this.onClick()}
          >
            <i class="material-icons" aria-hidden="true">
              menu
            </i>
          </button>
        </div>

        <Drawer
          isOpened={this.state.isOpened}
          onClickBackdrop={(e: MouseEvent) => this.emitOnClick(e)}
        />
      </header>
    )
  }

  private onClick() {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
}

export default Header
