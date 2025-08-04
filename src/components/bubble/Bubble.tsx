import React from "react";
import './Bubble.css';
import {stringToColor} from "../../utils/ColorUtils";
type BubbleProps = {
    text: string;
    onClick?: () => void;
};

export const Bubble: React.FC<BubbleProps> = ({ text, onClick }) => (
    <div className={"bubble"} style={{background: stringToColor(text), cursor: (onClick ? "pointer" : "default")}}
        onClick={onClick}
    >
        {text}
    </div>
);

export const BubbleContainer: React.FC<{ children: string[] }> = ({ children }) => (
    <div className={"bubbleContainer"}>
        {children.map((text, index) => (
            <Bubble key={index} text={text}/>
        ))}
    </div>
);