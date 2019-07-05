import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Radio, RadioGroup } from '../src';

const Examples = () => {
    const [selectedValue, setSelectedValue] = useState('2');

    const select1 = () => {
        setSelectedValue('1');
    };
    const select3 = () => {
        setSelectedValue('3');
    };

    return (
        <div>
            <p>
                <button onClick={select1}>Select 1</button>
                <button onClick={select3}>Select 3</button>
            </p>
            <RadioGroup
                name="xy"
                value={selectedValue}
                onChange={(e, value) => {
                    setSelectedValue(value);
                }}
            >
                <label>
                    <Radio value="1" /> 1
                </label>
                <label>
                    <Radio value="2" /> 2
                </label>
                <label>
                    <Radio value="3" /> 3
                </label>
            </RadioGroup>
            <pre>Selected value: {JSON.stringify(selectedValue, null, 2)}</pre>
        </div>
    );
};

ReactDOM.render(<Examples />, document.getElementById('example'));
