import React from 'react'

import MessageInput from './MessageInput'
import MessageList from './MessageList'

const Conversation = ({ messages, friend, handleTypingMessage, handleSubmitMessage }) => {
  return (
    <div className='tile is-parent is-vertical'>
      <MessageList messages={messages} friend={friend} />
      <MessageInput
        handleTypingMessage={handleTypingMessage}
        handleSubmitMessage={handleSubmitMessage}
      />
    </div>
  )
}

export default Conversation
