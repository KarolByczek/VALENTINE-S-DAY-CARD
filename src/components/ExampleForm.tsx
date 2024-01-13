import { ChangeEvent } from "react";

interface InputType {
    type: string,
    onChange: (event:ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export const ExampleForm = (props:InputType) => {
    const {type, onChange, value} = props;

    return (
        <input type={type} onChange={onChange} value={value} />
    )
};