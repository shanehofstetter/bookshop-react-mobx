import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Container, Dropdown, Icon, Menu} from "semantic-ui-react";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const i18n = this.props.i18n;

        return (
            <div>
                <Menu fixed='top' stackable>
                    <Menu.Item onClick={() => this.props.store.configStore.sidebarVisible = true}><Icon name={'content'}/></Menu.Item>
                    <Container>
                        <Menu.Item header as={'a'} href={'/'}>Bookshop</Menu.Item>
                        <Dropdown item simple className={'right'} text={i18n.language}>
                            <Dropdown.Menu>
                                {
                                    ['de', 'en'].map(locale => {
                                        return <Dropdown.Item key={locale}
                                                              onClick={() => this.props.store.configStore.language = locale}>{locale}</Dropdown.Item>;
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default withNamespaces('translation')(NavigationBar);