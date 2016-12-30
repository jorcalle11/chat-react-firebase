import React, {Component, PropTypes} from 'react'
import firebase from 'firebase'
import './wrapperChat.styl'
import ChatList from './chatList/chatList'
import ChatForm from './chatForm/chatForm'

const BOT_AVATAR = 'http://res.cloudinary.com/dgmr4poex/image/upload/v1483040037/rey_uxd0vm.jpg'
const BOT_NAME = 'Melchor'

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
    
    if (this.state.count < 1) {
      this.handleBotMessage('bienvenido')
    }
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
    this.responseBot(message.text.toLowerCase())
  }

  responseBot(word){
    if (this.state.count > 4) {
      this.handleBotMessage('despedida')
    } else {
      if (word.includes('react')) this.handleBotMessage('react')
      else if (word.includes('polimer')) this.handleBotMessage('polimer')
      else if (word.includes('python')) this.handleBotMessage('python')
      else if (word.includes('angular')) this.handleBotMessage('angular')
      else if (word.includes('java')) this.handleBotMessage('java')
      else if (word.includes('android')) this.handleBotMessage('android')
      else this.handleBotMessage('default')
    }
    this.setState({count: this.state.count + 1})
  }

  handleBotMessage(word) {
    const firebaseBot = firebase.database().ref(`bot/${word}`)
    firebaseBot.once('value')
      .then(snapshot => {
        setTimeout(() => {
          this.messagesDB.push({
            text: snapshot.val(),
            avatar: BOT_AVATAR,
            displayName: BOT_NAME,
            date: Date.now()
          })
        },1200)
      })
  }

  render() {
    return (
      <section>
        <ChatList messages={this.state.messages} nameBot={BOT_NAME}></ChatList>
        <ChatForm onSendMessage={this.sendMessage}></ChatForm>
      </section>
    )
  }
}

WrapperChat.propTypes = {
  user: PropTypes.object
}

export default WrapperChat