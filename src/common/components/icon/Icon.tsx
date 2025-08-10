import React, {useContext} from 'react';
import {ThemeContext} from "../../provider/ThemeProvider";

interface IconProps {
    src: string;
    className?: string;
    lightColor?: string;
    darkColor?: string;
}

const getIcon = (icon: string): string => {
    // Check if the icon is a URL
    if (icon.startsWith('http://') || icon.startsWith('https://')) {
        return icon; // Return the URL as is
    }
    return `/portfolio/icons/${icon}`;
}

export function PlainIcon({src, className, lightColor = "black", darkColor = "white" }: IconProps) {
    return (
        <img src={getIcon(src)} alt="icon" className={className} style={{ width: '32px', height: '32px' }} />
    );
}

export default function Icon({src, className, lightColor = "black", darkColor = "white" }: IconProps) {
    const theme = useContext(ThemeContext);

    const fillColor = theme?.mode === 'dark' ? darkColor : lightColor;

    return (
        <div
            className={className}
            style={{
                maskImage: `url(${getIcon(src)})`,
                WebkitMaskImage: `url(${getIcon(src)})`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                backgroundColor: fillColor,
                width: '32px', // Adjust as needed
                height: '32px', // Adjust as needed
            }}
        />
    );
}
