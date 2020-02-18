import React from 'react'

const MessageList = ({ messages, friend }) => {
  return (
    <div className='tile is-child box'>
      <p className='title'>Conversation with {friend.name}</p>
      {messages
        .filter(
          message =>
            (message.from === friend.id && message.to === 'User') ||
            (message.from === 'User' && message.to === friend.id)
        )
        .map(message => (
          <p key={Math.random()}>
            <b>{message.from}</b>: {message.message}
          </p>
        ))}
    </div>
  )
}

export default MessageList
