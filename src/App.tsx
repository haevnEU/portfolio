import React, {JSX, useContext, useEffect, useState} from 'react';
import './App.css';
import {IconButton} from "./components/button/button";
import ProfileSection from "./components/profile/ProfileSection";
import SkillsSection from "./components/cards/skills";
import DatabseSection from "./components/cards/DatabseStack";
import {CardElement, createCardElement} from "./types/CardElement";
import {PopupContext} from "./provider/PopupProvider";

function App() {
    const [elements, setElements] = useState<CardElement[]>([]);
    const { showPopup } = useContext(PopupContext);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch('/portfolio/data/info.json');
            console.log(res);
            const data = await res.json();
            setElements([
                createCardElement("Home", 0,<ProfileSection info={data} />),
                createCardElement("Backend", 1,<SkillsSection glowColor={"Purple"} stack={data.skills.backend} stackName={"Backend"} />),
                createCardElement("Frontend", 2,<SkillsSection glowColor={"Blue"} stack={data.skills.frontend} stackName={"Frontend"} />),
                createCardElement("Database", 3,<DatabseSection glow={"Green"} os={data.skills.operating_systems} stack={data.skills.databases} />),

            ]);
        };
        fetchInfo();
    }, []);

    const [index, setIndex] = useState(0);
    const nextElement = () => {
        const newIndex = (index + 1) % elements.length;
        showPopup("You are now viewing: " + elements[newIndex].name, 2000);
        setIndex(newIndex);
    }
    const previousElement = () => {
        const newIndex = (index - 1 < 0) ? elements.length - 1 : index - 1;
        showPopup("You are now viewing: " + elements[newIndex].name, 2000);
        setIndex(newIndex);
    }
  return ( <div className="App">
              <IconButton imageName={"arrow_circle_left.svg"} onClick={previousElement} className={"stick_left"} />
              <div style={{width: '80vw'}}>
                  { elements.length > 0 &&
                  elements[index].element
              }
              </div>
              <IconButton imageName={"arrow_circle_right.svg"} onClick={nextElement} className={"stick_right"} />
          </div>

  );
}

export default App;