import {Social} from "./Social";
import {Project} from "./Project";
import {Profile} from "./Profile";
import {SoftwareStack} from "./SoftwareStack";
import {StackElement} from "./StackElemet";

export type Info = {
    social: Social;
    contact: Profile;


    skills: {
       frontend: SoftwareStack;
        backend: SoftwareStack;
        databases: StackElement[];
        tools: string[];
        custom_tools: string[];
        cloud: string[];
        technologies: string[];
        other: string[];
        operating_systems: StackElement[];
        languages_spoken: string[];
        certifications: any[];
        education: any[];
        projects: Project[];
        hobbies: string[];
        interests: string[];
        awards: any[];
        publications: any[];
    };
};