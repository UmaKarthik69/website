import { useState,useContext } from "react";
import { context } from "./contextservice";
function Addtodo() {
    const [taskname,setTaskname] = useState('');
    const {add} = useContext(context)
    const _addtask = () => {
        add(taskname);
        setTaskname('');
    }
    return (
        <div className="row">
            <div className="col-sm-10">
                <h4 className="text-center">Addtodo</h4>
                <div className="mb-2">
                    <label>task name:</label>
                    <input type="text" className="form-control" value={taskname} onChange={(event)=>setTaskname(event.target.value)} placeholder="enter task name"></input>
                </div>
                <button className="btn btn-success" onClick={_addtask}>add</button>
            </div>
        </div>
    )
}
export default Addtodo;