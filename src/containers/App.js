import React, { PureComponent } from 'react'
import 'bulma'

import 'bulma-helpers/css/bulma-helpers.min.css'
import '../stylesheets/App.css'

import Conversation from './Conversation'
import FriendsList from '../components/FriendsList'

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      talkingTo: { id: 'friend1', name: 'Friend1' },
      textInput: '',
      friends: [
        {
          id: 'friend1',
          name: 'Friend1'
        },
        {
          id: 'friend2',
          name: 'Friend2'
        },
        {
          id: 'friend3',
          name: 'Friend3'
        },
        {
          id: 'friend5',
          name: 'Friend3'
        },
        {
          id: 'notfriend4',
          name: 'NotFriend4'
        }
      ],
      history: [
        { from: 'friend1', to: 'User', message: 'Are you going tonight?' },
        { from: 'friend2', to: 'User', message: 'Morning, how are you?' },
        { from: 'notfriend4', to: 'User', message: 'Are you going tonight?' },
        { from: 'friend5', to: 'User', message: 'Are you?' },
        { from: 'friend5', to: 'User', message: 'Are you going tonight?' },
        { from: 'friend3', to: 'User', message: 'Are you going tonight?' },
        { from: 'friend1', to: 'User', message: 'Are you going tonight?' }
      ]
    }
  }

  onHandleFriendChange = friend => {
    this.setState({ talkingTo: friend })
  }

  onHandleTypingMessage = ({ target: { value } }) => {
    this.setState({ textInput: value })
  }

  onHandleSubmitMessage = () => {
    this.setState((state, props) => {
      const newState = {
        ...state,
        history: [
          ...state.history,
          { from: 'User', to: state.talkingTo.id, message: state.textInput }
        ]
      }
      return newState
    })
  }

  render () {
    return (
      <div className='tile is-ancestor'>
        <div className='tile is-vertical'>
          <div className='tile'>
            <FriendsList
              friends={this.state.friends}
              handleFriendChange={this.onHandleFriendChange}
            />
            <Conversation
              messages={this.state.history}
              friend={this.state.talkingTo}
              handleTypingMessage={this.onHandleTypingMessage}
              handleSubmitMessage={this.onHandleSubmitMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
