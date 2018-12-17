import * as React from 'react';
import {Api} from '../../middleware/api';
import {withAlert} from "react-alert";
import {Link} from "react-router-dom";
import {route} from "../../routing/routing";
import {Button} from "semantic-ui-react";
import {withNamespaces} from "react-i18next";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book:
                {title: '', description: '', id: props.match.params.id, isbn: ''}
        };
    }

    componentDidMount() {
        this.props.store.bookStore.loadBook(this.state.book.id).then(book => {
            this.setState({book});
        }).catch(e => {
            console.error(`book with id ${this.state.book.id} not found`);
            this.props.alert.show('Book not found.', {type: 'danger'});
        });
    }

    render() {
        const {t} = this.props;
        return (
            <div className="book">
                <p style={{fontWeight: 'bold'}}>{this.state.book.title}</p>
                <p>{this.state.book.description}</p>
                <p>isbn: {this.state.book.isbn}</p>
                <Button primary as={Link} to={route(`/books`)}>
                    {t('link.back')}
                </Button>
            </div>
        )
    }

}

export default withNamespaces('translation')(withAlert(BookDetail));
