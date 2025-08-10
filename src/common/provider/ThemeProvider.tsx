import React, { createContext, useEffect, useState } from 'react';
import CButton from "../components/button/button";
import Icon from "../components/icon/Icon";

interface ThemeContextType {
    mode: 'light' | 'dark';
    toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialMode = (): 'light' | 'dark' => {
    const saved = localStorage.getItem('theme-mode');
    return saved === 'dark' ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode());

    useEffect(() => {
        const themeLinkId = 'theme-style';
        let link = document.getElementById(themeLinkId) as HTMLLinkElement | null;

        if (!link) {
            link = document.createElement('link');
            link.id = themeLinkId;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
        link.href = mode === 'light' ? '/portfolio/style/light.css' : '/portfolio/style/dark.css';
        localStorage.setItem('theme-mode', mode);
    }, [mode]);

    const toggleMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <div style={{ position: 'fixed', top: "10px", right: "60px", zIndex: 1000 }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={toggleMode}>
                    <Icon src={"themeswitcher.svg"} />
                </div>
            </div>
            {children}
        </ThemeContext.Provider>
    );
};