import React, {JSX, useContext, useEffect, useState} from 'react';
import './CV.css';
import {IconButton} from "../../components/button/button";
import ProfileSection from "../../components/profile/ProfileSection";
import SkillsSection from "../../components/cards/skills";
import DatabseSection from "../../components/cards/DatabseStack";
import {CardElement, createCardElement} from "../../types/CardElement";
import {PopupContext} from "../../provider/PopupProvider";
import HobbySection from "../../components/cards/Hobby";
import {IndexIndicator, ScrollProvider, useScrollContext} from "../../provider/ScrollProvider";
import Contact from "../../components/cards/Contact";

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