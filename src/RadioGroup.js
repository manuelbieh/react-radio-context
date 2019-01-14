// @flow
import React from 'react';
import { Provider } from './context';

type RadioGroupPropsT = {
    children: any,
    name?: string,
    onChange: (e: SyntheticInputEvent<HTMLInputElement>, selectedValue: string) => any,
    selectedValue?: string,
};

type RadioGroupStateT = {
    selectedValue: string,
};

export default class RadioGroup extends React.Component<RadioGroupPropsT, RadioGroupStateT> {
    state = {
        selectedValue: typeof this.props.selectedValue === 'string' ? this.props.selectedValue : '',
    };

    componentDidMount() {
        this.setState(() => ({
            selectedValue:
                typeof this.props.selectedValue === 'string' ? this.props.selectedValue : '',
        }));
    }

    onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
        e.persist();
        const {
            target: { checked, value },
        } = e;

        if (checked) {
            this.setValue(e, value);
        }
    };

    customOnChangeHandler = (
        originalEvent: SyntheticInputEvent<HTMLInputElement>,
        selectedValue: string
    ) => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(originalEvent, selectedValue);
        }
    };

    setValue = (originalEvent: SyntheticInputEvent<HTMLInputElement>, selectedValue: string) => {
        this.setState(
            () => ({
                selectedValue: selectedValue.toString(),
            }),
            () => {
                this.customOnChangeHandler(originalEvent, this.state.selectedValue);
            }
        );
    };

    render() {
        const contextValue = {
            onChange: this.onChange,
            selectedValue: this.state.selectedValue,
            name: this.props.name,
        };
        return <Provider value={contextValue}>{this.props.children}</Provider>;
    }
}
