type CV = {
    skills: string[];
    education: CV_Entry[];
    work: CV_Entry[];
    languages: string[];
    interests: string[];
    contacts: string[];
    projects: string[];
    socials: string[];
    about: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    birth: string;
}

type CV_Entry = {
    entry: string;
    exit: string;
    header: string;
    text: string;
    projects: string[];
}
