const uniqueID = () => {
  return Math.floor(Math.random() * Date.now());
};

class User implements IUser {
  constructor(
    public id: number,
    public name: string,
  ) { };
};

class Task implements ITask {
  readonly id: number = uniqueID()
  constructor(
    public title: string,
    public durationInMin: number,
    public completed: boolean,
    public developer: IUser,
  ) { };
  getInfo(): string {
    return `#${this.id} ${this.title} ${this.completed ? "completed" : "not completed"}`;
  };
};

class Project implements IProject {
  constructor(
    public tasks: ITask[] = [],
  ) { };
  addTask(task: ITask): void {
    this.tasks.push(task);
  };
  editTask(newTask: Partial<ITask>, idTask: number | string): void {
    this.tasks = this.tasks.map(task => {
      if (task.id == idTask) {
        switch (Object.keys(newTask)[0]) {
          case 'title':
            return {
              ...task,
              title: newTask.title
            };
          case 'durationInMin':
            return {
              ...task,
              durationInMin: newTask.durationInMin
            };
          case 'completed':
            return {
              ...task,
              completed: newTask.completed
            };
          case 'developer':
            return {
              ...task,
              developer: newTask.developer
            };
          case 'getInfo':
            return {
              ...task,
              getInfo: newTask.getInfo
            };
          default:
            return task;
        }
      } else return task
    })
  };
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  };
  getTotalTime(): number {
    return this.tasks.map(task => task.durationInMin).reduce((pre, time) => pre + time, 0);
  };
  getAllTasksByDeveloper(id: number): ITask[] {
    return this.tasks.filter(task => task.developer?.id === id);
  };
};

class App implements IApp {
  constructor(
    public name: string,
    public projects: IProject[] = []
  ) { };
  setName(newName: string): void {
    this.name = newName;
  };
  addProject(project: IProject): void {
    this.projects.push(project);
  };
};

const user1 = new User(1, 'Yaroslav');
const user2 = new User(2, 'Oleg');

const task1 = new Task('task1', 10, false, user1);
const task2 = new Task('task2', 30, true, user2);

const editTask1: Partial<ITask> = {
  title: 'title10',
};

const project1 = new Project([task1, task2]);

const app1 = new App('test1', [project1]);
console.log(app1)


