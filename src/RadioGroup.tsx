import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Provider } from './context';

type Props = {
    children: React.ReactNode;
    onChange: any;
    value: string;
};

const RadioGroup = ({ children, onChange, value: passedValue }: Props) => {
    const [value, setValue] = useState(passedValue);

    useEffect(() => {
        setValue(passedValue);
    }, [passedValue]);

    const changeHandler = useCallback(
        (event) => {
            event.persist();
            const {
                target: { checked, value },
            } = event;

            if (checked) {
                setValue(value);

                if (typeof onChange === 'function') {
                    onChange(event, value);
                }
            }
        },
        [onChange]
    );

    const contextValue = useMemo(
        () => ({
            onChange: changeHandler,
            value,
            name,
        }),
        [changeHandler, value]
    );

    return <Provider value={contextValue}>{children}</Provider>;
};

export default RadioGroup;
