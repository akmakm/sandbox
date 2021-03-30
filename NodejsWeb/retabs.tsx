declare var require: any
var React = require('react');

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MiClock } from './clocks';
import 'react-tabs/style/react-tabs.css';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class MyTabs extends React.Component {
    //handleClick = () => 
    handleClick(e): boolean
    {
        e.preventDefault();
        console.log('this is:', this);
        //    console.log('The link was clicked.');
        alert("The link was clicked.");
        return false;
    }
    //let MyTabs = (
    render()
    {
      return (
        <Tabs>
          <TabList>
            <Tab>Healthcheck</Tab>
            <Tab>Statistical estimation</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel id='health'> {}
            <p id='noname'>
                <b id='nowmon'>Now monitoring</b>: 
            </p>
            <p>
                Url:{' '}
                <a href="https://en.wikipedia.org/" target="_blank" onClick={this.handleClick}>
                    Wikipedia
                </a>
                username:{' '} / password {' '}
                frequency: {' '} times / day (1/sec)
            </p>
            <button onClick={this.handleClick}>New monitor</button>
          </TabPanel>
          <TabPanel>
            <p>
                  <b>estimation</b> (<i id='b1'>placeholder for myclock</i>) ()
            </p>
            <p>
                      <FlavorForm/>
                <a href="https://en.wikipedia.org/" target="_blank">
                    Wikipedia
                </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
                      <b>How to use:</b> (<i></i>) ()

            </p>
            <p>
                      <select>
                          <option value="grapefruit">Grapefruit</option>
                          <option value="lime">Lime</option>
                          <option selected value="coconut">Coconut</option>
                          <option value="mango">Mango</option>
                      </select>
                <a href="https://en.wikipedia.org/" target="_blank">
                    Wikipedia
                </a>
            </p>
        </TabPanel>
        </Tabs>
      );
    }
}

export { MyTabs };