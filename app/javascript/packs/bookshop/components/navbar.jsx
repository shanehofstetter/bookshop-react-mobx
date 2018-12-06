import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Container, Dropdown, Menu} from "semantic-ui-react";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const i18n = this.props.i18n;

        return (
            <div>
                <Menu fixed='top' stackable>
                    <Container>
                        <Menu.Item header as={'a'} href={'/'}>Bookshop</Menu.Item>
                        <Dropdown item simple text={i18n.language}>
                            <Dropdown.Menu>
                                {
                                    ['de', 'en'].map(locale => {
                                        return <Dropdown.Item key={locale}
                                                             onClick={() => i18n.changeLanguage(locale)}>{locale}</Dropdown.Item>;
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