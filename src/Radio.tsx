import React from 'react';
import RadioContext from './context';

type Props = {
    value: string;
    [attribute: string]: string;
};

const Radio = ({ value = '', ...props }: Props) => {
    const { name, value: selectedValue, onChange } = React.useContext(RadioContext);
    return (
        <input
            {...props}
            type="radio"
            name={name}
            value={value.toString()}
            checked={String(selectedValue || '') === String(value || '')}
            onChange={onChange}
        />
    );
};

export default Radio;
