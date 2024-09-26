import Todo from "./todo";
import { useContext } from "react";
import { context } from "./contextservice";
function Todolist(){
    const { tasks }= useContext(context);
    return(
        <div>
            <h4 className="text-center">todolist</h4>
            {
                tasks.map(task =>(
                    <Todo task={task}/>
                ))
            }
        </div>
    )
}
export default Todolist;