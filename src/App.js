import React, { PureComponent } from 'react'
import 'bulma'

import 'bulma-helpers/css/bulma-helpers.min.css'
import './App.css'

import Conversation from './Conversation'
import FriendsList from './FriendsList'

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      talkingTo: 'Friend1',
      textField: '',
      friends: ['Friend1', 'Friend2', 'Friend3', 'NotFriend4'],
      newHistory: [
        ['Friend1', 'User', 'Are you going tonight?'],
        ['Friend2', 'User', 'Morning, how are you?'],
        ['NotFriend4', 'User', 'Who dis?'],
        ['Friend3', 'User', 'Hi'],
        ['Friend3', 'User', 'Sure'],
        ['Friend3', 'User', 'But I will be late'],
        ['Friend1', 'User', 'Hey, are you there?']
      ]
    }
  }

  onHandleFriendChange = friend => {
    this.setState((state, props) => {
      return { talkingTo: friend }
    })
  }

  onHandleTypingMessage = ({ target: { value } }) => {
    this.setState((state, props) => {
      return { textField: value }
    })
  }

  onHandleSubmitMessage = () => {
    this.setState((state, props) => {
      const newState = {
        ...state,
        newHistory: [
          ...state.newHistory,
          ['User', state.talkingTo, state.textField]
        ]
      }

      return newState
    })
  }

  render () {
    return (
      <div className='tile is-ancestor is-full-height'>
        <div className='tile is-vertical is-12'>
          <div className='tile'>
            <FriendsList
              friends={this.state.friends}
              handleFriendChange={this.onHandleFriendChange}
            />
            <Conversation
              messages={this.state.newHistory}
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
