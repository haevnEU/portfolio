export function stringToColor(str: string, onlyLightColor = false): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        // Begrenze den Wert, damit die Farbe nicht zu dunkel oder zu hell ist
        if (onlyLightColor) {
            value = Math.max(160, Math.min(215, value)); // nur helle Farben
        } else {
            value = Math.max(100, Math.min(215, value)); // mittlerer Bereich, keine sehr dunklen Farben
        }
        color += ('00' + value.toString(16)).slice(-2);
    }

    return color;
}
export function getLevelColor(level: number) {
    if (level <= 5) {
        // Rot zu Grün
        const ratio = (level - 1) / 4;
        const r = Math.round(255 * (1 - ratio));
        const g = Math.round(255 * ratio);
        const b = 0;
        return `rgb(${r},${g},${b})`;
    } else {
        // Grün zu Blau
        const ratio = (level - 6) / 4;
        const r = 0;
        const g = Math.round(255 * (1 - ratio));
        const b = Math.round(255 * ratio);
        return `rgb(${r},${g},${b})`;
    }
}