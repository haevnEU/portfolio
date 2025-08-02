export const getIcon = (icon: string): string => {
    // Check if the icon is a URL
    if (icon.startsWith('http://') || icon.startsWith('https://')) {
        return icon; // Return the URL as is
    }
    return `/portfolio/icons/${icon}`;
}

export const getXIcon = (isLightMode: boolean ) => {
    return  isLightMode ? '/portfolio/icons/X_Light.svg' : '/portfolio/icons/X_Dark.svg';
}