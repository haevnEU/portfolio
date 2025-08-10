
// make props
import React from "react";

export default interface CommonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode | string | any | any[];
    theme?: 'light' | 'dark';
    className?: string;
}