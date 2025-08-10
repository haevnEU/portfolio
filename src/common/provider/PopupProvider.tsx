import React, { createContext, useCallback, useState, ReactNode } from 'react';
import "./popup.css";
type PopupContextType = {
    showPopup: (message: string, duration?: number) => void;
};

export const PopupContext = createContext<PopupContextType>({
    showPopup: () => {},
});

export const usePopupContext = () => {
    const context = React.useContext(PopupContext);
    if (!context) {
        throw new Error('getPopupContext must be used within a PopupProvider');
    }
    return context;
}

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<string | null>(null);
    const [visible, setVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const showPopup = useCallback((message: string, duration: number = 3000) => {
        setPopup(message);
        setVisible(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const id = window.setTimeout(() => {
            setVisible(false);
            setPopup(null);
            setTimeoutId(null);
        }, duration);
        setTimeoutId(id);
    }, [timeoutId]);

    const hide = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setVisible(false);
        setPopup(null);
    }

    return (
        <PopupContext.Provider value={{ showPopup }}>
            {children}
            {visible && popup && (
                <div className="popup" onClick={() => hide()}>
                    {popup}
                </div>
            )}
        </PopupContext.Provider>
    );
};