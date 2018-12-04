import * as React from "react";
import {Button, FormGroup, Label} from 'reactstrap';
import {withNamespaces} from "react-i18next";
import {Api} from "../middleware/api";
import Form from "./forms/form";
import Text from "./forms/text";
import TextArea from "./forms/textarea";
import {withAlert} from "react-alert";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class BookCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errors: {}};
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.getFormApi = this.getFormApi.bind(this);
    }

    handleOnSubmit(book) {
        Api.books.create(book).then(book => {
            this.setState({errors: {}});
            this.formApi.reset();
            this.props.store.bookStore.addBook(book);
            this.props.alert.show(`Book '${book.title}' successfully added.`, {type: 'success'});
        }).catch(formErrors => {
            this.setState({errors: formErrors});
            this.props.alert.show('Book could not be saved.', {type: 'warning'});
        });
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        const {t} = this.props;
        return <Form onSubmit={this.handleOnSubmit} getApi={this.getFormApi} className={'mb-2 mt-2'}>
            <FormGroup>
                <Label for={'title'}>{t('activerecord.attributes.book.title')}*</Label>
                <Text field="title" id={'title'} errors={this.state.errors.title}/>
            </FormGroup>
            <FormGroup>
                <Label for={'description'}>{t('activerecord.attributes.book.description')}*</Label>
                <TextArea field="description" id={'description'} errors={this.state.errors.description}/>
            </FormGroup>
            <FormGroup>
                <Label for={'isbn'}>{t('activerecord.attributes.book.isbn')}*</Label>
                <Text field="isbn" id={'isbn'} errors={this.state.errors.isbn}/>
            </FormGroup>
            <Button type="submit">{t('form.submit')}</Button>
        </Form>
    }
}

const i18nEnhanced = withNamespaces('translation')(BookCreateForm);
const alertEnhanced = withAlert(i18nEnhanced);

export default alertEnhanced;
