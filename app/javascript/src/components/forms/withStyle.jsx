import * as React from "react";
import {addCssClass} from "./utils";
import {Label} from "semantic-ui-react";

const withStyle = (FormInput) => {

    return class extends React.Component {

        render() {
            let {className = '', errors = [], ...rest} = this.props;
            let invalid = errors.length > 0;

            className = addCssClass(className, 'form-control');
            if (invalid) {
                className = addCssClass(className, 'error');
            }
            return <React.Fragment>
                <FormInput {...rest} className={className}/>
                {invalid ? <Label basic color='red' pointing>{errors.join(' ')}</Label> : ''}
            </React.Fragment>
        }
    };

};

export default withStyle;