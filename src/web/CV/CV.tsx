import React, {JSX, useContext, useEffect, useState} from 'react';
import './CV.css';
import {IconButton} from "../../common/components/button/button";
import ProfileSection from "../../common/components/profile/ProfileSection";
import SkillsSection from "../../common/components/cards/skills";
import DatabseSection from "../../common/components/cards/DatabseStack";
import {CardElement, createCardElement} from "../../common/types/CardElement";
import {PopupContext} from "../../common/provider/PopupProvider";
import HobbySection from "../../common/components/cards/Hobby";
import {IndexIndicator, ScrollProvider, useScrollContext} from "../../common/provider/ScrollProvider";
import Contact from "../../common/components/cards/Contact";

export default function CV() {
    const [elements, setElements] = useState<CardElement[]>([]);

    useEffect(() => {

    }, []);


    return (
      <div className={"CV"}>
          <h1>CV</h1>
      </div>
    );
}