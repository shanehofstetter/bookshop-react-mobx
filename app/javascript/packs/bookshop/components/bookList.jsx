import * as React from 'react';
import BookListItem from './bookListItem';
import {withNamespaces} from 'react-i18next';
import BookCreateForm from "./bookCreateForm";
import {Col, Row} from "reactstrap";
import {ActionCable} from 'react-actioncable-provider';
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.handleReceivedBook = this.handleReceivedBook.bind(this);
    }

    componentDidMount() {
        this.props.store.bookStore.loadBooks();
    }

    handleReceivedBook(response) {
        if (response.action === 'created') {
            this.props.store.bookStore.addBook(response.book);
        }
    }

    render() {
        const t = this.props.t;
        return (
            <div>
                <ActionCable
                    channel={{channel: 'BooksChannel'}}
                    onReceived={this.handleReceivedBook}
                />
                <Row>
                    <Col md={12}>
                        <h1>{t('activerecord.models.book.other')}</h1>
                    </Col>
                    <Col md={12}>
                        <BookCreateForm/>
                    </Col>
                    <Col md={12}>
                        {this.props.store.bookStore.books.map((book, index) => <BookListItem key={index} book={book}/>)}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withNamespaces('translation')(BookList);