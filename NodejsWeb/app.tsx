declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

import { MyTabs } from './retabs';
import { SideB } from './sidebar';
import { MiClock } from './clocks';
import { user1, user2, getGreeting } from './users';
import { LoginControl } from "./LoginControl";

//=====================================
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}
function App() {
    let el3 = new SideB('');
    return (
        <div>
            <MyTabs />
            <MiClock freq='1700' />
            <LoggingButton/>
        </div>
    );
}

      
////<SideB>            <MiClock freq='1700' />
            //    <MiClock freq='1000' />
            ////</SideB>
//ReactDOM.render(<Clock />,
    //    document.getElementById('b1')
//=====================================
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
