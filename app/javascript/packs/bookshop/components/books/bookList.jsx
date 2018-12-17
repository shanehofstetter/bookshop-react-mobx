import * as React from 'react';
import BookListItem from './bookListItem';
import {withNamespaces} from 'react-i18next';
import {ActionCable} from 'react-actioncable-provider';
import {inject, observer} from "mobx-react";
import {Button, Grid, Icon, Item} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {route} from "../../routing/routing";
import BookPlaceholder from "./bookPlaceholder";

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
                        {this.props.store.authStore.authenticated ? this.renderCreateButton() : ''}
                        <Button icon onClick={() => this.props.store.bookStore.loadBooks()}><Icon
                            name={'refresh'}/></Button>
                        <Item.Group>
                            {this.props.store.bookStore.isLoading ? this.renderLoading() : this.renderBookList()}
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    renderCreateButton() {
        return <Button primary as={Link} to={route(`/books/create`)}>
            {this.props.t('link.create')}
        </Button>
    }

    renderLoading() {
        return <React.Fragment>
            <BookPlaceholder/>
            <BookPlaceholder/>
            <BookPlaceholder/>
        </React.Fragment>;
    }

    renderBookList() {
        return this.props.store.bookStore.books.map((book, index) => {
            return <BookListItem key={index} book={book}/>;
        });
    }
}

export default withNamespaces('translation')(BookList);