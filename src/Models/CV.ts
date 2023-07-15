import { Education } from "./Education"
import { WorkExperience } from "./WorkExperience"

export interface CV {
    Name: string
    Job: string
    Nationality?: string
    Phone: string
    Email: string
    Linkedin?: string
    Github?: string
    WorkExperience: WorkExperience[]
    Education: Education[]
}