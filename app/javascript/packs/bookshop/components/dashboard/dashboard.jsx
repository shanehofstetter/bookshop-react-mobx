import * as React from "react";
import {withNamespaces} from "react-i18next";

class Dashboard extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <h1>{t('link.home')}</h1>
        );
    }
}

export default withNamespaces('translation')(Dashboard);
