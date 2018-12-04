import * as React from "react";
import {addCssClass} from "./utils";

const asBootstrapFormInput = (FormInput) => {

    return class extends React.Component {

        render() {
            let {className = '', errors = [], ...rest} = this.props;
            let invalid = errors.length > 0;

            className = addCssClass(className, 'form-control');
            if (invalid) {
                className = addCssClass(className, 'is-invalid');
            }
            return <React.Fragment>
                <FormInput {...rest} className={className}/>
                {invalid ? <div className="invalid-feedback">{errors.join(' ')}</div> : ''}
            </React.Fragment>
        }
    };

};

export default asBootstrapFormInput;