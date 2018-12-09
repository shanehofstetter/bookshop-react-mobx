import React from 'react'
import {Redirect} from 'react-router-dom'
import {withNamespaces} from "react-i18next";
import {inject, observer} from "mobx-react";
import Text from "../forms/text";
import {Button} from "semantic-ui-react";
import Form from "../forms/form";

@inject('store')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {}
        };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(credentials) {
        this.setState({errors: {}});
        const {email, password} = credentials;
        this.props.store.authStore.login({email, password}).then(() => {
            console.log('logged in');
        }).catch((e) => {
            console.error(e);
            this.setState({
                errors: {
                    email: ['username or password invalid'],
                    password: ['username or password invalid']
                }
            });
        });
    }

    render() {
        const {t} = this.props;
        if (this.props.store.authStore.authenticated) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h2>Login</h2>
                <Form onSubmit={this.handleOnSubmit} className={'ui form'}>
                    <div className={'field'}>
                        <label htmlFor={'email'}>{t('activerecord.attributes.user.email')}*</label>
                        <Text type={'email'} field="email" id={'email'} errors={this.state.errors.email}/>
                    </div>
                    <div className={'field'}>
                        <label htmlFor={'password'}>{t('activerecord.attributes.user.password')}*</label>
                        <Text type={'password'} field="password" id={'password'} errors={this.state.errors.password}/>
                    </div>
                    <Button type="submit">{t('form.login')}</Button>
                </Form>
            </div>
        )
    }
}

export default withNamespaces('translation')(Login);