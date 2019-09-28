import React from 'react'

const MessageList = props => {
  const { messages, friend } = props
  return (
    <div className='tile is-child box'>
      <p className='title'>Conversation with {friend}</p>
      {Object.values(messages).map(message => <p key={Math.random()}>{friend}: {message}</p>)}
    </div>
  )
}

export default MessageList
