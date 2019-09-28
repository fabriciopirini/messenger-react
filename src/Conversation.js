import React from 'react'

import MessageList from './MessageList'
import MessageInput from './MessageInput'

const Conversation = props => {
  const { messages, friend, handleTypingMessage, handleSubmitMessage } = props
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
