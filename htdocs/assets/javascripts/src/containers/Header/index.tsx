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

  public emitOnClick() {
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
          onClickBackdrop={() => this.emitOnClick()}
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
