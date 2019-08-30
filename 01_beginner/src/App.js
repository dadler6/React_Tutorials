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

// Make user defined component using properties
function Greet(props) {
  return <h1>Hello, {props.name}</h1>
};

// Define avatar user component
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarURL} alt={props.user.name} />
  )  
};

// Define user
let user1 = {
  firstName: 'Josh',
  lastName: 'Perez',
  avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png'
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

let element4 = (
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
);

// User component
let element5 = <Greet name="Pablo" />

// Put it all together
function App() {
    let elements = [
      element, element2, element3, element4, element5
    ];
    return (<div>{elements}</div>);
}

export default App;
