import React, {useState} from 'react';
import './Projects.css';
import {Project} from "../../common/types/Project";
import Modal from "../../common/components/modal/modal";
import Icon from "../../common/components/icon/Icon";
import {BubbleContainer} from "../../common/components/bubble/Bubble";
import data from "../../data/info.json";

export default function Projects() {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [project, setProject] = useState<Project | undefined>(undefined);

    const showProject = (project: Project) => {
        setVisibility(!visibility);
        setProject(project);
    }

    return (

        <div className={"Projects"}>
            <div className={"ProjectList"}>
                {
                    data.skills.projects.map((project: Project) => (
                        <span onClick={() => showProject(project)}
                              className="projectListItem">{project.name}</span>
                    ))
                }
                {
                    (visibility && project) ?
                        <Modal glow={"Red"} visibility={visibility} setVisibility={setVisibility}>
                            <div className={"projectModalContent"}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <div className={"projectModalHeader"}>
                                        <Icon src={"github-mark.svg"}/>
                                        <h2>{project.name}</h2>
                                    </div>
                                </a>
                                <div className={"projectModalContentContainer"}>
                                    <div>
                                    <span
                                        className={"projectModalDescription"}>Dieses Projekt ist aktuell <b>{project.active ? "in aktiver" : "nicht länger in"}</b> entwicklung.</span>
                                        <span className={"projectModalDescription"}>
                                        {project.description}
                                    </span>
                                    </div>

                                    <div>
                                        <h3>Technologien</h3>
                                        <BubbleContainer items={project.technologies}/>
                                    </div>
                                    <div>
                                        <h3>Role(n)</h3>
                                        <BubbleContainer items={project.role.sort((a, b) => a.localeCompare(b))}/>
                                    </div>

                                    <div>
                                        <h3>Repository</h3>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
                                </div>
                            </div>

                        </div>
                    </Modal>
                    : <div/>
                }
            </div>
        </div>
    );
}