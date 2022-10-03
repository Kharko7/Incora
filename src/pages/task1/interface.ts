export interface IApp {  
  name: string;
  setName(name: string): void;
  projects: IProject[];
  addProject(project: IProject): void;
};

export interface IProject {
  tasks: ITask[];
  addTask(task: ITask): void;
  editTask(newTask: Partial<ITask>, idTask: number | string): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): ITask[];
};

export interface IUser {
  id: number;
  name: string;
};

export interface ITask {
  id: number;
  title: string,
  durationInMin: number;
  completed: boolean;
  developer: IUser;
  getInfo(): string;
};