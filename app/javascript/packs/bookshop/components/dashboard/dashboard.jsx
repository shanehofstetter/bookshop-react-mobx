import * as React from "react";
import {ExampleTable} from "./exampleTable";
import {ExampleList} from "./exampleList";
import {ExampleStatistics} from "./exampleStatistics";

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ExampleStatistics/>
                <ExampleTable/>
                <ExampleList/>
            </React.Fragment>
        );
    }
}

export default Dashboard;
