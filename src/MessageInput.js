import React from 'react'

const MessageInput = props => {
  const { handleTypingMessage, handleSubmitMessage } = props
  return (
    <div id='sendtext' className='tile is-parent'>
      <div className='tile is-child is-10 has-margin-right-5'>
        <div className='field'>
          <p className='control has-icons-left has-icons-right'>
            <input
              className='input is-medium'
              type='text'
              placeholder='Send text'
              onChange={e => handleTypingMessage(e)}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope' />
            </span>
          </p>
        </div>
      </div>
      <div className='tile is-child'>
        <div className='field'>
          <div className='control'>
            <button className='button is-primary is-medium is-pulled-right' onClick={handleSubmitMessage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageInput
