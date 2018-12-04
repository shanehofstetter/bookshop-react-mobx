import * as React from "react";
import {Form as InformedForm} from "informed";

class Form extends React.Component {
    render() {
        const {children, ...other} = this.props;

        return <InformedForm {...other}>{children}</InformedForm>
    }
}

export default Form;
