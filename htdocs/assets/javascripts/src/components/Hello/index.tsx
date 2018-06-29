import { h } from 'preact'
import { ComponentRouterProps } from '../../decls/router'

const Hello = ({ path, url, matches }: ComponentRouterProps) => (
  <section class="Hello">
    <div class="Hello__inner">
      <h1>Hello!</h1>

      <div class="Hello__message">
        <p>
          My name is <em>mojahige</em>.
        </p>
        <p>
          I do not understand English at all... 😅<br />
          English may be strange.
        </p>
        <p>I am interested in Preact, I try various things 😏</p>
        <p>This repository uses the following 👍</p>

        <ul>
          <li>
            <a href="https://github.com/developit/preact" target="_blank">
              preact
              <i class="material-icons" aria-hidden="true">
                launch
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/developit/preact-router"
              target="_blank"
            >
              preact-router
              <i class="material-icons" aria-hidden="true">
                launch
              </i>
            </a>
          </li>
        </ul>

        <p>
          There are also things that I can not use yet, so please see the
          package.json for details.
        </p>
      </div>
    </div>
  </section>
)

export default Hello
