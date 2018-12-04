import * as React from 'react';
import {Api} from '../middleware/api';
import {withAlert} from "react-alert";

class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book:
                {title: '', description: '', id: props.match.params.id, isbn: ''}
        };
    }

    componentDidMount() {
        Api.books.byId(this.state.book.id).then(book => {
            this.setState({book});
        }).catch(e => {
            console.error(`book with id ${this.state.book.id} not found`);
            this.props.alert.show('Book not found.', {type: 'danger'});
        });
    }

    render() {
        return (
            <div className="book">
                <p style={{fontWeight: 'bold'}}>{this.state.book.title}</p>
                <p>{this.state.book.description}</p>
                <p>isbn: {this.state.book.isbn}</p>
            </div>
        )
    }

}

export default withAlert(BookDetail);
