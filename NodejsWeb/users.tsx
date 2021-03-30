declare var require: any
var React = require('react');

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user1 = {
    firstName: 'Sebastian',
    lastName: 'Ocon',
    avatarUrl: 'troll.jpg'
};
let user2 = React.createElement(
    'button',
    { firstName: 'Daniel' },
    'Rickiardo troll.jpg'
);

function getGreeting(props) {
    if (props) {
        return <div><h1>Hello, {formatName(props)}!</h1><h2>Good to see you here.</h2>
               </div>;
    }
    return <div><h1>Hello, Stranger.</h1><h2>Getdafock outtahere.</h2></div>;
}

export { user1, user2, getGreeting }