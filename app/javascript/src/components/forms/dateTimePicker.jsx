import { asField } from 'informed';
import DateTime from 'react-datetime';
import React from "react";
import withStyle from "./withStyle";

const DateTimePicker = asField(({ fieldState, fieldApi, ...props }) => {
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { onChange, onBlur, initialValue, forwardedRef, locale, ...rest } = props;
    return (
        <DateTime
            {...rest}
            locale={locale || 'de-CH'}
            ref={forwardedRef}
            value={value || initialValue}
            onChange={e => {
                setValue(e);
                if (onChange) {
                    onChange(e);
                }
            }}
            onBlur={e => {
                setTouched();
                if (onBlur) {
                    onBlur(e);
                }
            }}
        />
    );
});

export default withStyle(DateTimePicker);