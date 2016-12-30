import React, {PropTypes} from 'react'
import moment from 'moment'
import './chatRow.styl'

const ChatRow = ({message,nameBot}) => {
  const isBot = message.displayName === nameBot
  return (
    <div className={`chat ${isBot?'bot':'user'}`}>
      <p className="z-depth-1">
        {message.text}
        {!isBot?<span className="material-icons left">check</span>:''}
        <small className="date">{moment(message.date).format('LT')}</small>
      </p>
    </div>
  )
}

ChatRow.propTypes = {
  message: PropTypes.object.isRequired,
  nameBot: PropTypes.string.isRequired
}

export default ChatRow