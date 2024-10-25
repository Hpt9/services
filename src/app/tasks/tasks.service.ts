import { Injectable } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
interface Task2{
    title:string;
    description:string;
}
@Injectable ({providedIn:'root'})
export class TasksService{
    tasks: Task[]=[
        {
            id:'t1',
            title:"task1",
            description:"desc of task1",
            status:'OPEN'
        },
        {
            id:'t2',
            title:"task2",
            description:"desc of task2",
            status:'IN_PROGRESS'
        },
        {
            id:'t3',
            title:"task3",
            description:"desc of task3",
            status:'DONE'
        },
    ];
    constructor(){
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            this.tasks=JSON.parse(tasks)
        }
    }
    addTask(taskOBJ:Task2){
        this.tasks.push({
            id:new Date().getTime().toString(),
            title:taskOBJ.title,
            description:taskOBJ.description,
            status:'OPEN'
        })
        console.log(this.tasks)
        this.saveTasks()
    }
    getSpecifiedTasks(type:string):Task[]{
        if(type === 'ALL'){
            return this.tasks
        }else{
            return this.tasks.filter((e)=>e.status===type)
        }
    }

    changeSatusOfTask(id:string,status:TaskStatus){
        const task = this.tasks.find(e => e.id === id);
        if (task) {
            task.status = status;
            console.log(`Updated task ${id} status to ${status}`);
        } else {
            console.log(`Task with id ${id} not found.`);
        }
        console.log(this.tasks)
        this.saveTasks()
    }
    saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}