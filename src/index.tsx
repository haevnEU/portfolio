import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './web/App/WebApp';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './common/provider/ThemeProvider';
import {PopupProvider, usePopupContext} from "./common/provider/PopupProvider";
import Projects from "./web/Projects/Projects";
import CV from './web/CV/CV';
import Button from "./common/components/button/button";
import MobileApp from "./mobile/MobileApp/MobileApp";
import WebApp from "./web/App/WebApp";
import {isMobile} from "./common/utils/ResourceUtils";

const Main: React.FC = () => {
    const [mobile, setMobile] = useState<boolean>(isMobile());
    const {showPopup} = usePopupContext();

    useEffect(() => {
        const handleResize = () => {
            if (mobile !== isMobile()) {
                showPopup("You're switching to " + (isMobile() ? "mobile" : "web") + " mode", 2000);
            }
            setMobile(isMobile());
        };

        window.addEventListener('resize', handleResize);
    }, [mobile]);

    return (<>
            {
                mobile ? <MobileApp/> : <WebApp/>
            }
        </>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <PopupProvider>
                <Main/>
            </PopupProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

