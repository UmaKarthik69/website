import Todolist from "./todolist";
import Addtodo from "./addtodo";
import { context } from "./contextservice";
import { useState } from "react";
function TodoApp() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "taking react class at 6am",
            iscompleted: true
        },
        {
            id: 1,
            name: "taking react class at 6am",
            iscompleted: false
        },
        {
            id: 1,
            name: "taking react class at 6am",
            iscompleted: false
        }
    ]);
    const toggleStatus = (id) => {
        const updatedtasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, iscompleted: !task.iscompleted };
            }
            return task;
        });
        setTasks(updatedtasks);
    };
    const deletet = (id) => {
        setTasks(tasks.filter(task => task.id !==id));
    };
    const addTask = (taskname) =>{
        setTasks([...tasks, {id:tasks.length +1,name:taskname, iscompleted:false }])
    };
    return (
        <div className="container">
            <div className="row">
                <context.Provider value={{ tasks: tasks, toggleStatus: toggleStatus,deletet : deletet, add:addTask }}>
                    <div className="col-sm">
                        <Todolist />
                    </div>
                    <div className="col-sm">
                        <Addtodo />
                    </div>
                </context.Provider>

            </div>

        </div>
    )
}
export default TodoApp;