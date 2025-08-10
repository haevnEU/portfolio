import React from "react";
import './Bubble.css';
import {stringToColor} from "../../utils/ColorUtils";
type BubbleProps = {
    text: string;
    onClick?: () => void;
};

type BubbleContainerProps = {
    children?: string[];
    className?: string;
    items?: string[];
}

export const Bubble: React.FC<BubbleProps> = ({ text, onClick }) => (
    <div className={"bubble"} style={{background: stringToColor(text), cursor: (onClick ? "pointer" : "default")}}
        onClick={onClick}
    >
        {text}
    </div>
);

export const BubbleContainer: React.FC<BubbleContainerProps> = ({ children, items }) => {
    return (
        <div className={"bubbleContainer"}>
            {items && items.map((item, index) => (
                <Bubble key={index} text={item} />
            ))}
            { children && children.map((item, index) => (
                <Bubble key={index} text={item} />
            ))}
        </div>
    );
}