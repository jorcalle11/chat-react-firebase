import React,{PropTypes} from 'react'
import ChatRow from '../chatRow/chatRow'
import './chatList.styl'
import Alert from '../../alert/alert.jsx'

const ChatList = ({messages,nameBot}) => {

  const loadData = () => {
    return (
      <section className="chat-list container blue lighten-5 z-depth-1">
        {messages.map(message => <ChatRow message={message} key={message.date} nameBot={nameBot} />)}
      </section>
    )
  }

  const showAlert = () => {
    return (
      <Alert message="Cargando mensajes, espere..." color="blue accent-2"/>
    )
  }

  return (
    messages.length ? loadData() : showAlert()
  )
}

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  nameBot: PropTypes.string.isRequired
}

export default ChatList