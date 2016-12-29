import React, {Component, PropTypes} from 'react'
import './nav.styl'

class Nav extends Component {
  renderUserData() {
    const { user,onLogout } = this.props
    return (
      <ul className="navbar right">
        <li>
          <img src={user.photoURL} className="circle avatar" width="40"/>
        </li>
        <li className="margin-right">
          {user.displayName}
        </li>
        <li>
          <button className="btn waves-effect waves-light white darken-3 red-text" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    )
  }

  renderLoginButton() {
    const { onAuth } = this.props
    return (
      <ul className="navbar right">
        <li>
          <button className="btn waves-effect waves-light white darken-3 black-text" onClick={onAuth}>
            Login
          </button>
        </li>
      </ul>
    )
  }

  render() {
    const { user } = this.props
    return (
      <nav className="red darken-4">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo left">
            {this.props.title}
            <div className="brand-img">
              <img src="img/firebase.png" alt="firebase" title="firebase" className="circle" width="40"/>
              <img src="img/react.js.png" alt="react" title="react" className="circle" width="40"/>
            </div>
          </a>
          { user ? this.renderUserData() : this.renderLoginButton()}
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  onAuth: PropTypes.func,
  onLogout: PropTypes.func
}

export default Nav