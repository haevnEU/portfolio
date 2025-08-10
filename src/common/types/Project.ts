export type Project = {
    readme?: string;
    name: string;
    url: string;
    description: string;
    technologies: string[];
    role: string[];
    active: boolean;
    screenshots?: string[];
}