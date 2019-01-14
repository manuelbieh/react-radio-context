// @flow
import React from 'react';
import { Consumer } from './context';

type RadioT = {
    value: string,
};

const Checkbox = ({ value, ...props }: RadioT) => (
    <Consumer>
        {({ name, selectedValue, onChange }) => (
            <input
                {...props}
                type="radio"
                name={name}
                value={(value || '').toString()}
                checked={(value || '').toString() === String(selectedValue || '')}
                onChange={onChange}
            />
        )}
    </Consumer>
);

export default Checkbox;
