import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Icon, {PlainIcon} from "../components/icon/Icon";

type LanguageContextType = {
    language: string;
    data: any | null;
};

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    data: null,
});

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('en');
    const [data, setData] = useState<any | null>(null);
    const [languageIcon, setLanguageIcon] = useState<string>('us.svg');
    useEffect(() => {
        const loadData = async () => {
            try {
                const module = await import(`../../data/info/${language}.json`);
                setData(module.default);
            } catch (error) {
                console.error(`Error loading data for language: ${language}`, error);
            }
        };
        loadData();
    }, [language]);

    const toggleMode = () => {
        const newLanguage = language === 'en' ? 'de' : 'en';
        setLanguage(newLanguage);
        setLanguageIcon(newLanguage === 'en' ? 'us.svg' : 'ger.svg');
    };

    return (
        <LanguageContext.Provider value={{ language, data }}>
            {children}
            <div style={{ position: 'fixed', top: "10px", right: "10px", zIndex: 1000 }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={toggleMode}>
                    <PlainIcon src={languageIcon} />
                </div>
            </div>
        </LanguageContext.Provider>
    );
};