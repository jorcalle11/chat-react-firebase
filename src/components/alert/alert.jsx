import React,{PropTypes} from 'react'
import './alert.styl'

const Alert = ({message, color}) => {
  return (
    <section className="container">
      <div className={`alert center-align ${color}`}>
        {message}
      </div>
    </section>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Alert