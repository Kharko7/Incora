const uniqueID = () => {
    return Math.floor(Math.random() * Date.now());
};
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
}
;
class Task {
    constructor(title, durationInMin, completed, developer) {
        this.title = title;
        this.durationInMin = durationInMin;
        this.completed = completed;
        this.developer = developer;
        this.id = uniqueID();
    }
    ;
    getInfo() {
        return `#${this.id} ${this.title} ${this.completed ? "completed" : "not completed"}`;
    }
    ;
}
;
class Project {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    ;
    addTask(task) {
        this.tasks.push(task);
    }
    ;
    editTask(newTask, idTask) {
        this.tasks = this.tasks.map(task => {
            if (task.id == idTask) {
                switch (Object.keys(newTask)[0]) {
                    case 'title':
                        return Object.assign(Object.assign({}, task), { title: newTask.title });
                    case 'durationInMin':
                        return Object.assign(Object.assign({}, task), { durationInMin: newTask.durationInMin });
                    case 'completed':
                        return Object.assign(Object.assign({}, task), { completed: newTask.completed });
                    case 'developer':
                        return Object.assign(Object.assign({}, task), { developer: newTask.developer });
                    case 'getInfo':
                        return Object.assign(Object.assign({}, task), { getInfo: newTask.getInfo });
                    default:
                        return task;
                }
            }
            else
                return task;
        });
    }
    ;
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    ;
    getTotalTime() {
        return this.tasks.map(task => task.durationInMin).reduce((pre, time) => pre + time, 0);
    }
    ;
    getAllTasksByDeveloper(id) {
        return this.tasks.filter(task => { var _a; return ((_a = task.developer) === null || _a === void 0 ? void 0 : _a.id) === id; });
    }
    ;
}
;
class App {
    constructor(name, projects = []) {
        this.name = name;
        this.projects = projects;
    }
    ;
    setName(newName) {
        this.name = newName;
    }
    ;
    addProject(project) {
        this.projects.push(project);
    }
    ;
}
;
const user1 = new User(1, 'Yaroslav');
const user2 = new User(2, 'Oleg');
const task1 = new Task('task1', 10, false, user1);
const task2 = new Task('task2', 30, true, user2);
const editTask1 = {
    title: 'title10',
};
const project1 = new Project([task1, task2]);
const app1 = new App('test1', [project1]);
