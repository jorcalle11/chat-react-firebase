import React,{PropTypes} from 'react'
import './chatForm.styl'

const ChatForm = ({onSendMessage}) => {

  const sendMessage = (e) => {
    e.preventDefault()
    if (e.target.message.value !== '') {
      onSendMessage(e.target.message.value)
      e.target.message.value = ''
    }
  }

  return (
    <form className="page-footer" onSubmit={sendMessage}>
      <div className="container row">
        <div className="col s9">
          <div className="input-field">
            <input type="text" name="message" className="validate" placeholder="Escribe tu mensaje..." />
          </div>
        </div>
        <div className="col s3">
          <button className="btn waves-effect waves-light" type="submit">
            Enviar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  )
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func
}

export default ChatForm