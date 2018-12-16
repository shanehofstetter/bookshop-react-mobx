import * as React from "react";
import AppSidebar from "./sidebar";
import i18n from "../../i18n";
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from "../alerts/alertTemplate";
import {I18nextProvider} from "react-i18next";

class AppLayout extends React.Component {

    render() {
        return <I18nextProvider i18n={i18n}>
            <AlertProvider template={AlertTemplate} timeout={5000} zIndex={150}>
                <AppSidebar>
                    <div className={'app-container'} style={{marginTop: '1rem', padding: '10px'}}>
                        {this.props.children}
                    </div>
                </AppSidebar>
            </AlertProvider>
        </I18nextProvider>
    }
}

export default AppLayout;