import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Button, Item, Segment} from "semantic-ui-react";

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
                        <Button primary as={'a'} href={`books/${this.props.book.id}`} style={{marginTop: 10}}>
                            {t('link.details')}
                        </Button>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

export default withNamespaces('translation')(BookListItem);
