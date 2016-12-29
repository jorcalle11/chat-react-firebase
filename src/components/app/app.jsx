import React, {Component} from 'react'
import firebase from 'firebase'
import Nav from '../nav/nav'
import WrapperChat from '../chat/chat'
import Alert from '../alert/alert'

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

  renderChat() {
    if (this.state.user){
      return <WrapperChat user={this.state.user} />
    } else {
      return <Alert message="Tienes que autenticarte para ver tus mensajes" color="yellow accent-3" />
    }
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
        {this.renderChat()}
      </section>
    )
  }
}

export default App