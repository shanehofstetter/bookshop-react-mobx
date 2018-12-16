import * as React from "react";
import BookList from "./bookList";
import BookDetail from "./bookDetail";
import {
    Route,
    Switch
} from 'react-router-dom'
import NotFound from "../notFound";
import BookCreate from "./bookCreate";
import PrivateRoute from "./../privateRoute"

class Books extends React.Component {
    render() {
        const match = this.props.match;
        return <Switch>
            <Route exact path={`${match.path}`} component={BookList}/>
            <PrivateRoute exact path={`${match.path}/create`} component={BookCreate}/>
            <Route exact path={`${match.path}/:id`} component={BookDetail}/>
            <Route path={`${match.path}/*`} component={NotFound}/>
        </Switch>
    }
}

export default Books;