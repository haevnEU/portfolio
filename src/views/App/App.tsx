import React, {JSX, useContext, useEffect, useState} from 'react';
import './App.css';
import {IconButton} from "../../components/button/button";
import ProfileSection from "../../components/profile/ProfileSection";
import SkillsSection from "../../components/cards/skills";
import DatabseSection from "../../components/cards/DatabseStack";
import {CardElement, createCardElement} from "../../types/CardElement";
import {PopupContext} from "../../provider/PopupProvider";
import HobbySection from "../../components/cards/Hobby";
import {IndexIndicator, ScrollProvider, useScrollContext} from "../../provider/ScrollProvider";
import Contact from "../../components/cards/Contact";
import data from '../../data/info.json';

export default function App() {
    const [elements, setElements] = useState<CardElement[]>([]);

    useEffect(() => {

        const fetchInfo = async () => {
            setElements([
                createCardElement("Home", 0, <ProfileSection info={data}/>),
                createCardElement("Backend", 1, <SkillsSection glowColor={"Purple"} stack={data.skills.backend}
                                                               stackName={"Backend"}/>),
                createCardElement("Frontend", 2, <SkillsSection glowColor={"Blue"} stack={data.skills.frontend}
                                                                stackName={"Frontend"}/>),
                createCardElement("Database", 3, <DatabseSection glow={"Green"} os={data.skills.operating_systems}
                                                                 stack={data.skills.databases}/>),
                createCardElement("Hobbies", 4, <HobbySection glow={"Red"} interests={data.skills.interests}
                                                              hobbies={data.skills.hobbies}
                                                              langugages={data.skills.languages_spoken}/>),
                createCardElement("Contact", 4, <Contact glow={"Yellow"} info={data}/>),

            ]);
        };
        fetchInfo();
    }, []);


    return (
        <ScrollProvider maxSize={elements.length}>

            <ScrollableChild elements={elements}/>
            <IndexIndicator />
        </ScrollProvider>
    );
}

interface ScrollableChildProps {
    elements: CardElement[]
}

function ScrollableChild({elements}: ScrollableChildProps) {
    const {index} = useScrollContext();
    return (    <div className="App">
            <div style={{width: '80vw'}}>
                {elements.length > 0 &&
                    elements[index].element
                }
            </div>
     </div>
    );
}