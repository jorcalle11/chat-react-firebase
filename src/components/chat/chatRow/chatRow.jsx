import React, {PropTypes} from 'react'

const ChatRow = ({message}) => {
  return (
    <div>
      <strong>{message.displayName}: </strong>{message.text}
    </div>
  )
}

ChatRow.propTypes = {
  message: PropTypes.object.isRequired
}

export default ChatRow