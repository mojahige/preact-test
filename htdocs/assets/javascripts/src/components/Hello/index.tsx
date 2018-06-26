import { h } from 'preact'

const Hello = ({ path }) => (
  <section class="hello">
    <h1>Hello!</h1>
    <div>
      <p>
        My name is <em>mojahige</em> 😄
      </p>
      <p>
        I do not understand English at all... 😅<br />
        English may be strange.
      </p>
      <p>I am interested in Preact, I try various things 😏</p>
      <p>This repository uses the following 👍</p>

      <ul>
        <li>
          <a href="https://github.com/developit/preact">preact</a>
        </li>
        <li>
          <a href="https://github.com/developit/preact-router">preact-router</a>
        </li>
      </ul>

      <p>
        There are also things that I can not use yet, so please see the
        package.json for details.
      </p>
    </div>
  </section>
)

export default Hello
