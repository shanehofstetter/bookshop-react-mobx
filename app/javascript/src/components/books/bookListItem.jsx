import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Button, Icon, Item, Segment} from "semantic-ui-react";
import {route} from "../../routing/routing";
import {Link} from "react-router-dom";

class BookListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;
        return (
            <Segment>
                <Item>
                    <Item.Content>
                        <Item.Header>{this.props.book.title}</Item.Header>
                        <Item.Description>{this.props.book.description}</Item.Description>
                        <Button primary style={{marginTop: 10}} as={Link} to={route(`/books/${this.props.book.id}`)}>
                            <Icon name={'zoom'}/>{t('link.details')}
                        </Button>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

export default withNamespaces('translation')(BookListItem);
