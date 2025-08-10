import React, {JSX, useContext, useEffect, useState} from 'react';
import './WebApp.css';
import {IconButton} from "../../common/components/button/button";
import ProfileSection from "../../common/components/profile/ProfileSection";
import SkillsSection from "../../common/components/cards/skills";
import DatabseSection from "../../common/components/cards/DatabseStack";
import {CardElement, createCardElement} from "../../common/types/CardElement";
import {PopupContext} from "../../common/provider/PopupProvider";
import HobbySection from "../../common/components/cards/Hobby";
import {IndexIndicator, ScrollProvider, useScrollContext} from "../../common/provider/ScrollProvider";
import Contact from "../../common/components/cards/Contact";
import data from '../../data/info.json';
import Projects from "../Projects/Projects";

export default function WebApp() {
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
        <Projects />
        // <ScrollProvider maxSize={elements.length}>
        //
        //     <ScrollableChild elements={elements}/>
        //     <IndexIndicator />
        // </ScrollProvider>
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