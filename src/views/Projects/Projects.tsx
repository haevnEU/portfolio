import React, {JSX, useContext, useEffect, useState} from 'react';
import './Projects.css';
import {IconButton} from "../../components/button/button";
import ProfileSection from "../../components/profile/ProfileSection";
import SkillsSection from "../../components/cards/skills";
import DatabseSection from "../../components/cards/DatabseStack";
import {CardElement, createCardElement} from "../../types/CardElement";
import {PopupContext} from "../../provider/PopupProvider";
import HobbySection from "../../components/cards/Hobby";
import {IndexIndicator, ScrollProvider, useScrollContext} from "../../provider/ScrollProvider";
import Contact from "../../components/cards/Contact";
import {HorizontalScrollableView} from "../../components/ScrollableView/ScrollableView";
import data from '../../data/info.json';
import {ProjectCard} from "../../components/card2/card";

export default function Projects() {
    const [elements, setElements] = useState<CardElement[]>([]);

    useEffect(() => {

    }, []);


    return (
      <div className={"Projects"}>
          <h1>PROJECTS</h1>
          <HorizontalScrollableView>
              {
                    data.skills.projects.map((project, index) => (
                        <ProjectCard>
                            {project}
                        </ProjectCard>

                    ))
              }
          </HorizontalScrollableView>
      </div>
    );
}