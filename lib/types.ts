export interface IProject {
  name: string;
  description: string;
  live?: string;
  github?: string;
  tags: string[];
}

export interface IExperience {
  company: string;
  date: string;
  achievements: string[];
}
