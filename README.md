# ⚛ React Radio Context

This package is intended to make your life easier when working with `<input type="radio" />` in React. It provides a `<RadioContext />` wrapper component and an actual `<Radio />` component that can be used inside of a `RadioContext` wrapper. Instead of having to manage the state by yourself the `RadioContext` component takes care of that.

## Installation

```
npm install react-radio-context
```

or

```
yarn add react-radio-context
```

## Example

What does `react-radio-context` do and how does it do that?

This is your average radio group:

```js
handleFruitChange = (e) => {
    const {
        target: { name, value },
    } = e;
    this.setState(() => ({
        [name]: value,
    }));
};

// …

<form>
    <input
        onChange={this.handleFruitChange}
        type="radio"
        name="fruit"
        value="apple"
        checked={this.state.fruit === 'apple'}
    />{' '}
    Apple
    <input
        onChange={this.handleFruitChange}
        type="radio"
        name="fruit"
        value="orange"
        checked={this.state.fruit === 'orange'}
    /> Orange
    <input
        onChange={this.handleFruitChange}
        type="radio"
        name="fruit"
        value="watermelon"
        checked={this.state.fruit === 'watermelon'}
    />{' '}
    Watermelon
</form>;
```

Repetitive, hard to manipulate and easily desynchronized. Lift up `name` and `onChange`, and (optionally) give the group an initially `selectedValue`:

```js
import { Radio, RadioGroup } from 'react-radio-context';

<RadioGroup name="fruits" selectedValue="pineapple">
    <Radio value="kiwi" /> Kiwi
    <Radio value="pineapple" /> Pineapple
    <Radio value="watermelon" /> Watermelon
</RadioGroup>;
```

Since this component uses React's Context API, `<Radio>` elements can by anywhere inside of a `<RadioGroup>` and they **do not** have to be a direct descendant! You can also define a custom onChange handler which is called **after** the state was updated and receives the Event object and the new value as its parameters.

```js
<RadioGroup
    name="frameworks"
    onChange={(event, newValue) => {
        console.log(newValue);
    }}
>
    <p>
        <label htmlFor="react">
            <Radio value="react" id="react" /> React
        </label>
    </p>
    <p>
        <label htmlFor="vue">
            <Radio value="vue" id="vue" /> Vue
        </label>
    </p>
</RadioGroup>
```

## Props

### `<RadioGroup />`

| Prop            | Type                                                                               | Description                                             |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `onChange`      | `(originalEvent: SyntheticEvent<HTMLInputElement>, selectedValue: string) => void` | Will be called on every time a radio changes its state. |
| `name`          | `string`                                                                           | Name for all radioes within one `<RadioGroup>`          |
| `selectedValue` | `string`                                                                           | Value of the currently selected `<Radio>` element`      |

### `<Radio />`

The `Radio` component passes all of its props the the underlying `<input type="radio" />` element. All valid HTML attributes can be used with the exception of `checked`, `name`, `onChange` as they will be set by the parent `<RadioGroup>` component.

## Todo

-   Add more tests, especially with Enzyme to be able to check if `onChange` events are fired correctly.

## License

MIT.
