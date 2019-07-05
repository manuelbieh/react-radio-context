# ⚛ React Radio Context

This package is intended to make your life easier when working with `<input type="radio" />` in React. It provides a `<RadioGroup />` wrapper component and a `<Radio />` component that can be used inside of a `RadioGroup` wrapper. Instead of having to manage the state by yourself the `RadioGroup` component takes care of that.

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

```jsx
const FruitSelector = () => {
    const [fruit, setFruit] = React.useState();
    const handleFruitChange = (e) => {
        const {
            target: { value },
        } = e;

        setFruit(value);
    };

    return (
        <form>
            <input
                onChange={handleFruitChange}
                type="radio"
                name="fruit"
                value="apple"
                checked={fruit === 'apple'}
            />{' '}
            Apple
            <input
                onChange={handleFruitChange}
                type="radio"
                name="fruit"
                value="orange"
                checked={fruit === 'orange'}
            /> Orange
            <input
                onChange={handleFruitChange}
                type="radio"
                name="fruit"
                value="watermelon"
                checked={fruit === 'watermelon'}
            />{' '}
            Watermelon
        </form>
    );
};
```

Repetitive, hard to manipulate and easily desynchronized. Lift up `name` and `onChange`, and (optionally) give the group an initially `selectedValue`:

```jsx
import { Radio, RadioGroup } from 'react-radio-context';

const FruitSelector = () => (
    <RadioGroup name="fruits" selectedValue="pineapple">
        <Radio value="kiwi" /> Kiwi
        <Radio value="pineapple" /> Pineapple
        <Radio value="watermelon" /> Watermelon
    </RadioGroup>
);
```

Since this component uses React's Context API, `<Radio>` elements can by anywhere inside of a `<RadioGroup>` and they **do not** have to be a direct descendant. You can also define a custom onChange handler which is called **after** the state was updated and receives the Event object and the new value as its parameters.

```jsx
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

## Components

### `<RadioGroup />`

| Prop       | Type                                                                  | Description                                             |
| ---------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>, value: string) => void` | Will be called on every time a radio changes its state. |
| `name`     | `string`                                                              | Name for all radioes within one `<RadioGroup>`          |
| `value`    | `string`                                                              | Value of the currently selected `<Radio>` element`      |

### `<Radio />`

The `Radio` component passes all of its props the the underlying `<input type="radio" />` element. All valid HTML attributes can be used with the exception of `checked`, `name`, `onChange` as they will be set by the parent `<RadioGroup>` component.

## Todo

-   Add comprehensive tests

## License

MIT.
