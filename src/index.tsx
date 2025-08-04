import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './provider/ThemeProvider';
import {PopupProvider} from "./provider/PopupProvider";
import Projects from "./views/Projects/Projects";
import CV from './views/CV/CV';
import Button from "./components/button/button";

const Main: React.FC = () => {
    const pages = [
        <App />,
        <Projects />,
        <CV />
    ];

    const [currentPage, setCurrentPage] = useState(0);
    return (
        <div>

            <div>
                <Button onClick={()=>setCurrentPage(0)}>App</Button>
                <Button onClick={()=>setCurrentPage(1)}>Projects</Button>
                <Button onClick={()=>setCurrentPage(2)}>CV</Button>
            </div>
            <div>
                {
                    pages[currentPage]
                }
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <PopupProvider>
                  <Main />
          </PopupProvider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

