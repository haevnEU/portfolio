import {Project} from "../types/Project";

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

export const isMobile = (): boolean => {
    console.log(document.documentElement.clientWidth);
    return document.documentElement.clientWidth <= 768;
}

export const getAllScreenshotsFor = (project: Project) => {
    // get all screenshots from public/project.name
    const screenshots: string[] = [];
    for (let i = 1; i <= 10; i++) {
        const screenshot = `/portfolio/img/${project.name}/${i}.png`;
        if (screenshotExists(screenshot)) {
            screenshots.push(screenshot);
        }
    }
    return screenshots;
}


const screenshotExists = (screenshot: string): boolean => {
    const img = new Image();
    img.src = screenshot;
    return img.complete && img.naturalHeight !== 0;
}