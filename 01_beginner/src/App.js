import React from 'react';
import './App.css';

// Define formatName function
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// Define getGreeting function
function getGreeting(user) {
  if (user) {
    return (
      <div>
        <h1>Hello, {formatName(user)}!</h1>
        <img src={user.avatarURL}/>
      </div>
    );
  };
  return <h1>Hello, Stranger</h1>;
};

// Define user
let user1 = {
  firstName: 'Josh',
  lastName: 'Perez',
  avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png'
};

// Add tick
function tick() {
    let e = (
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    );
    return e;
};

// Try using getGreeting function w/ and w/o a user
let element = getGreeting(user1);
let element2 = getGreeting();

// Different way of element creation
let element3 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

// Tick
let element4 = tick()

// Put it all together
function App() {
    let elements = [element, element2, element3, element4];
    return (<div>{elements}</div>);
}

export default App;
