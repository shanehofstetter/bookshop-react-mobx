import * as React from "react";
import BookCreateForm from "./bookCreateForm";
import {Link} from "react-router-dom";
import {route} from "../../routing/routing";
import {Button} from "semantic-ui-react";
import {withNamespaces} from "react-i18next";

class BookCreate extends React.Component {
    render() {
        const {t} = this.props;
        return <div>
            <h1>Add new book</h1>
            <BookCreateForm afterCreatePath={route('/books')}/>
            <Button primary style={{marginTop: '1rem'}} as={Link} to={route(`/books`)}>
                {t('link.back')}
            </Button>
        </div>
    }
}

export default withNamespaces('translation')(BookCreate);