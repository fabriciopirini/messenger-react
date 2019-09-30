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
      talkingTo: 'Friend1',
      textInput: '',
      friends: ['Friend1', 'Friend2', 'Friend3', 'NotFriend4'],
      history: [
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
          ['User', state.talkingTo, state.textInput]
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
