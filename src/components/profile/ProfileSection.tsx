import React, {useContext, useEffect, useState} from 'react';
import './profile.css';
import {Info} from "../../types/Info";
import {getIcon, getXIcon} from "../../utils/ResourceUtils";
import {ThemeContext} from "../../provider/ThemeProvider";

interface ProfileSectionProps {
    info: Info;
}

function ProfileSection(props: ProfileSectionProps) {
    const theme = useContext(ThemeContext);

    const createSocialLink = (platform: string, icon:string, url: string, isTwitter = false) => {
        if(isTwitter){
            return (
                <div className={"twitterBG"} title={platform}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                        <img className={"twitterLogo"} src={getXIcon(theme?.mode === "light")} alt={platform} width={32}/>
                    </a>
                </div>
            )
        }

        const iconPath =  getIcon(icon);
        return (
            <a title={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                <img src={iconPath} alt={platform} width={32}/>
            </a>
        );
    }
    return (
            <div className="profileContainer">
                <h1>Hej welcome on my portfolio</h1>
                <span>Hello, my name is {props.info.contact.name} {props.info.contact.familyName}.</span><br/>
                <span>I am a passionate developer with a love for creating innovative solutions and exploring new technologies.</span><br/>
                <span>Besides coding, I am an avid gamer who enjoys diving into virtual worlds and challenging myself. </span><br/>
                <span>In my free time, I also love spending quality moments with my dog, who always brings joy and inspiration to my life.</span>
                <br/>
                <div className={"socialLinks"}>
                    {createSocialLink("GitHub", "github-mark.svg", props.info.social.github)}
                    {createSocialLink("Discord", "Discord-Symbol-Blurple.svg", props.info.social.discord)}
                    {createSocialLink("X (Formerly Twitter)", "X_Dark.svg", props.info.social.twitter, true)}
                    {createSocialLink("LinkedIn", "LI-In-Bug.png", props.info.social.linkedin)}
                    {createSocialLink("Xing", "xing.svg", props.info.social.xing)}
                </div>

            </div>
    );
}

export default ProfileSection;