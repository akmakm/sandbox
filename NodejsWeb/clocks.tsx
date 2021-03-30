declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');

class MiClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    handleClick(k : number) {

        this.setState(state => ({
            isToggleOn: !(state.isToggleOn+k)
        }));
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h4>It is {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export { MiClock };