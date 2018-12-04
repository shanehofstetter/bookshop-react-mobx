import * as React from "react";
import BookList from "./bookList";
import BookDetail from "./bookDetail";
import {
    Route,
    Switch
} from 'react-router-dom'
import NotFound from "./notFound";

class Books extends React.Component {
    render() {
        const match = this.props.match;
        return <Switch>
            <Route exact path={`${match.url}`} component={BookList}/>
            <Route exact path={`${match.url}/:id`} component={BookDetail}/>
            <Route path={`${match.url}/*`} component={NotFound}/>
        </Switch>
    }
}

export default Books;