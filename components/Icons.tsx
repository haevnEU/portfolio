import Image from "next/image";
import GIT from "@/assets/icons/git.svg";
import GIT_HUB from "@/assets/icons/github.svg";
import CPP from "@/assets/icons/c++.svg";
import JAVA from "@/assets/icons/java.svg";
import C from "@/assets/icons/c_programming.svg";

import LINKED_IN from "@/assets/icons/linkedin.svg";
import XING from "@/assets/icons/xing.svg";
import TWITTER from "@/assets/icons/twitterx.svg";
import Link from "next/link";
import CV from "@/assets/json/cv.json";

export const Icons = {
    git: () => (<Image src={GIT} alt="git" width={100} height={100}/>),
    gitHub: () => (<Image src={GIT_HUB} alt="github" width={100} height={100}/>),
    cpp: () => (<Image src={CPP} alt="cpp" width={100} height={100}/>),
    java: () => (<Image src={JAVA} alt="java" width={100} height={100}/>),
    c: () => (<Image src={C} alt="c" width={100} height={100}/>),

};

export const SocialIcons = {
    linkedIn: () => (<Link target={"_blank"} href={CV.linkedIn}><Image src={LINKED_IN} alt="linkedin"/></Link>),
    xing: () => (<Link target={"_blank"} href={CV.xing}><Image src={XING} alt="xing"/></Link>),
    twitter: () => (<Link target={"_blank"} href={CV.twitter}><Image src={TWITTER} alt="xing"/></Link>),
    gitHub: () => (<Link target={"_blank"} href={CV.github}><Image src={GIT_HUB} alt="github"/></Link>),
};
