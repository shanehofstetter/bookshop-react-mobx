import * as React from "react";
import {Message} from "semantic-ui-react";

class AlertTemplate extends React.Component {

    render() {
        // the style contains only the margin given as offset
        // options contains all alert given options
        // message is the alert message...
        // close is a function that closes the alert
        const {style, options, message, close} = this.props;
        const props = {[options.type]: true};

        return (
            <Message {...props} onDismiss={close}>
                {message}
            </Message>
        )
    }
}

export default AlertTemplate;