import * as React from 'react';
import BookListItem from './bookListItem';
import {withNamespaces} from 'react-i18next';
import BookCreateForm from "./bookCreateForm";
import {ActionCable} from 'react-actioncable-provider';
import {inject, observer} from "mobx-react";
import {Dimmer, Grid, Item, Loader} from "semantic-ui-react";

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
                <Grid columns={1}>
                    <Grid.Column>
                        <h1>{t('activerecord.models.book.other')}</h1>
                    </Grid.Column>
                    <Grid.Column>
                        <BookCreateForm/>
                    </Grid.Column>
                    <Grid.Column>
                        <Item.Group>
                            {this.props.store.bookStore.isLoading ?
                                <Dimmer active inverted><Loader inverted>Loading</Loader></Dimmer>
                                : this.props.store.bookStore.books.map((book, index) => <BookListItem key={index}
                                                                                                      book={book}/>)}
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default withNamespaces('translation')(BookList);