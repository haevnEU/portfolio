import {JSX} from "react";

export type CardElement = {
    name: string;
    index: number;
    element: JSX.Element;
}

export const createCardElement = (name: string, index: number, element: JSX.Element): CardElement => {
    return {
        name,
        index,
        element
    };
}