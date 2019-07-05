import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Provider } from './context';
import { ProviderProps } from './types';

const RadioGroup = ({ children, name, onChange, value: passedValue }: ProviderProps) => {
    const [value, setValue] = useState(passedValue);

    useEffect(() => {
        setValue(passedValue);
    }, [passedValue]);

    const changeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
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
        [changeHandler, name, value]
    );

    return <Provider value={contextValue}>{children}</Provider>;
};

export default RadioGroup;
