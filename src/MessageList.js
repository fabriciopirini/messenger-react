import React from 'react'

const MessageList = ({ messages, friend }) => {
  return (
    <div className='tile is-child box'>
      <p className='title'>Conversation with {friend}</p>
      {messages
        .filter(
          message =>
            (message[0] === friend && message[1] === 'User') ||
            (message[0] === 'User' && message[1] === friend)
        )
        .map(message => (
          <p key={Math.random()}>
            <b>{message[0]}</b>: {message[2]}
          </p>
        ))}
    </div>
  )
}

export default MessageList
