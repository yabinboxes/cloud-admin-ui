import { ProjectModel } from "./project.model";

export class OrgsModel {
    public name?: string;
    public description?: string;
    public projects?: Array<ProjectModel>
}