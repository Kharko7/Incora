interface IApp {  
  name: string;
  setName(name: string): void;
  projects: IProject[];
  addProject(project: IProject): void;
};

interface IProject {
  tasks: ITask[];
  addTask(task: ITask): void;
  editTask(newTask: Partial<ITask>, idTask: number | string): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): ITask[];
};

interface IUser {
  id: number;
  name: string;
};

interface ITask {
  id: number;
  title: string,
  durationInMin: number;
  completed: boolean;
  developer: IUser;
  getInfo(): string;
  //get string in format `#${id} ${title} ${"completed" | "not completed"}`
};