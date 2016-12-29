import React, {Component, PropTypes} from 'react'
import firebase from 'firebase'
import './wrapperChat.styl'
import ChatRow from './chatRow/chatRow'
import ChatForm from './chatForm/chatForm'

class WrapperChat extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0, messages: [] }
    this.messagesDB = firebase.database().ref(`messages/${this.props.user.uid}`)
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentWillMount() {
    this.messagesDB.on('child_added', (snapshot) => {
      this.setState({
        messages: this.state.messages.concat(snapshot.val())
      })
    })
  }

  componentWillUnmount() {
    this.messagesDB.off()
  }

  sendMessage(text){
    const {user} = this.props
    const message = {
      text,
      avatar: user.photoURL,
      displayName: user.displayName,
      date: Date.now()
    }
    this.messagesDB.push(message)
  }

  render() {
    const { messages } = this.state
    return (
      <section>
        {messages.map(message => <ChatRow message={message} key={message.date} />).reverse()}
        <ChatForm onSendMessage={this.sendMessage}></ChatForm>
      </section>
    )
  }
}

WrapperChat.propTypes = {
  user: PropTypes.object
}

export default WrapperChat