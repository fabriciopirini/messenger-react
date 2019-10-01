# Simple React Messenger

This is a simple messenger project made using React and it has basic features as: 
- Sending message to different friends;
- Be able to check messages' history for each friend.

Future features not implemented in this release:
- Persisting chat history through page reloads;
- Talking to a backend;
- Multiple users.

Improvements to consider if had more time:
- Create a simple Dockerfile to containerize the application;
- Save timestamp for each message;
- Typechecking with PropTypes;
- Improve UX/Accessibility (Send message when hit ENTER, move through the page using TAB);
- Improve/fix a few UI inconsistences (MessageList grows as the number of messages increase, MessageInput should be fixed at the bottom, visual feedback for current selected contact);
- Rewrite code using React Hooks and React Context to make it simpler, smaller and remove props drilling. React Context, especially, would make more sense as the application grow.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Bulma](https://react-bulma.dev/en/).

## Running

Running `npm start` should show you a working application on [http://localhost:3000](http://localhost:3000)  
This should reload automatically with any changes you make.

## Tests

No tests were implemented due to the limited time. Normally, I would create a project using Test Driven Development (TDD) and write a small test before creating each component.
