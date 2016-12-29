import React, {Component} from 'react'
import firebase from 'firebase'
import Nav from './nav'

class App extends Component {
  constructor() {
    super()
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = { user: null}
  }

  handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`Hola ${result.user.displayName}, Has iniciado sesión correctamente`))
      .catch(err => console.log(`Ocurrió algun error ${err.code}: ${err.message}`))
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(() => console.log('has cerrado sesión correctamente'))
      .catch(err => console.log(`Ocurrió algun error ${err.code}: ${err.message}`))
  }
  
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <section>
        <Nav
          title="Chat"
          user={this.state.user}
          onAuth={this.handleLogin}
          onLogout={this.handleLogout}>
        </Nav>
      </section>
    )
  }
}

export default App