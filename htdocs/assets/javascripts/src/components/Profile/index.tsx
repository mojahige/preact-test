import { h } from 'preact'
import { ComponentRouterProps } from '../../decls/router'

const Profile = ({ path, url, matches }: ComponentRouterProps) => (
  <section class="profile">
    <div class="profile__inner">
      <h1>Profile</h1>
    </div>
  </section>
)

export default Profile
