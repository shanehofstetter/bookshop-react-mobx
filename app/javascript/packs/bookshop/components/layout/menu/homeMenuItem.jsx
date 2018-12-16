import * as React from "react";
import {Link} from "react-router-dom";
import {route} from "../../../routing/routing";
import {Menu} from "semantic-ui-react";

class HomeMenuItem extends React.Component {
    render() {
        return (
            <Menu.Item as={Link} to={route('/')} header>Bookshop</Menu.Item>
        );
    }
}

export default HomeMenuItem;