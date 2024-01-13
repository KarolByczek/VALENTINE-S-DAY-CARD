import { ReactNode } from "react";
import { MouseEvent } from "react";


interface ListType {
    onHover: (event:MouseEvent<HTMLUListElement>) => void,
    onRemove: (event:MouseEvent<HTMLUListElement>) => void,
    children: ReactNode
}

export const ExampleList = (props:ListType) => {
    const {onHover, children, onRemove} = props;

    return (
        <ul onMouseOver={onHover} onMouseOut={onRemove}>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
        </ul> 
    )
};