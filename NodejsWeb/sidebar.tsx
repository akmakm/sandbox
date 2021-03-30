declare var require: any
var React = require('react');
import Sidebar from "react-sidebar";
class SideB extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {

        return (<div>

            <Sidebar
                sidebar={<b> Text001
                </b>}
                open={this.state.sidebarOpen}

                onSetOpen={this.onSetSidebarOpen}

                styles={{ sidebar: { background: "white" } }}
            >

                Text201
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                </button>
                <br/> <br />
                Text222
                Text333
                </Sidebar>

            </div>
        );
    }
};

export { SideB };