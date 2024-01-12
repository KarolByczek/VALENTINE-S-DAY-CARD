import { ChangeEvent } from "react";

export interface InputType {
    type: string,
    onChange: (event:ChangeEvent<HTMLInputElement>) => void,
}

export const ExampleForm = (props:InputType) => {
    const {type, onChange} = props;

    return (
        <input type={type} onChange={onChange}/>
    )
};