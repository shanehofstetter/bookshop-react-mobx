import * as React from "react";
import {Link} from "react-router-dom";
import {route} from "../../../routing/routing";
import {Menu} from "semantic-ui-react";

class HomeMenuItem extends React.Component {
    render() {
        return (
            <Menu.Item header><Link to={route('/')} style={{color: 'inherit'}}>Bookshop</Link></Menu.Item>
        );
    }
}

export default HomeMenuItem;