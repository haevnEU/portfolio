import React from 'react';
import './glow.css';

// make props
interface GlowProps {
    children?: React.ReactNode;
    color: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
    className?: string;
}

function Glow(props: GlowProps) {
    return (
        <div className={`pulsingGlow${props.color}` + (props.className ? ` ${props.className}` : '')}>
            {props.children}
        </div>
    );
}

export default Glow;
