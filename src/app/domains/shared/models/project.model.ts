import { IconProject } from "./iconProject.model";
import { LinkProject } from "./linkProject.model";

export interface Project {
    id:number;
    title: string;
    description: string;
    mainImage: string;
    icons: IconProject[];
    links: LinkProject[];
}