import React from 'react'

const FriendsList = ({ friends, handleFriendChange }) => {
  return (
    <div className='tile is-parent is-3'>
      <div className='tile is-child box'>
        <p className='title'>Contacts</p>
        {friends.map(friend => (
          <div className='card has-margin-bottom-5' key={friend} onClick={() => handleFriendChange(friend)}>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img
                      src='https://bulma.io/images/placeholders/96x96.png'
                      alt='Profile pic'
                    />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-5'>{friend}</p>
                  <p className='subtitle is-6'>@{friend.toLowerCase()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsList
