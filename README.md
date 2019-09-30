# Simple React Messenger

This is a simple project as part of Cognite interview process. React Messenger has basic functionality as: 
- Sending message to different friends;
- Be able to check messages' history for each friend.

Future functionalities not implemented in this version:
- Persisting chat history through page reloads;
- Talking to a backend;
- Multiple users.

Improvements if had more time:
- Typechecking with PropTypes;
- Save timestamp for each message;
- Rewrite code using React Hooks and React Context to make it simpler, smaller and remove props drilling. React Context, especially, would make more sense as the application grow;
- Improve/fix a few UI inconsistences (MessageList grows as the number of messages increase, MessageInput should be fixed at the bottom, visual feedback for current selected contact);
- Improve UX/Accessibility (Send message when hit ENTER, move through page using TAB);
- Create a simple Dockerfile to containerize the application.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Bulma](https://react-bulma.dev/en/).

## Running

Running `npm start` should show you a working application on [http://localhost:3000](http://localhost:3000)  
This should reload automatically with any changes you make.

## Tests

No tests were implemented due to the limited time. Normally, I would create a project using TDD and writing a small test before creating each component.
