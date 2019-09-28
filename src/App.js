import React from 'react'
import 'bulma'

import 'bulma-helpers/css/bulma-helpers.min.css'
import './App.css'

import FriendsList from './FriendsList'
import Conversation from './Conversation'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      talkingTo: 'Friend1',
      textField: '',
      history: {
        Friend1: ['Are you going tonight?', 'Hey, are you there?'],
        Friend2: ['Morning, how are you?'],
        Friend3: ['Hi', 'Sure', 'But I will be late'],
        NotFriend4: ['Who are you?']
      }
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
        history: {
          ...state.history,
          [state.talkingTo]: [...state.history[state.talkingTo], state.textField]
        }
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
              friends={this.state.history}
              handleFriendChange={this.onHandleFriendChange}
            />
            <Conversation
              messages={this.state.history[this.state.talkingTo]}
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
