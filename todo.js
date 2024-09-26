import { useContext } from "react";
import { context } from "./contextservice";
function Todo(props) {
    const {toggleStatus, deletet}  = useContext(context)
    return (
        <div className="border-bottom mb-2">
            <div className="text-end">
                <button className="btn btn-danger me-2 " onClick={()=> deletet(props.task.id)}><i className="fa-solid fa-trash"></i></button>
                {props.task.iscompleted ? (
                    <button className="btn btn-warning text-end" onClick={()=> toggleStatus(props.task.id)}><i className="fa-solid fa-xmark"></i></button>
                ) : (
                    <button className="btn btn-success text-end" onClick={()=> toggleStatus(props.task.id)}><i className="fa-solid fa-check"></i></button>
                )}
            </div>
            <p>Id:  <span className="text-danger">{props.task.id}</span></p>
            <p>Name:  <span className="text-danger">{props.task.name}</span></p>
            <p>is completed:  <span className="text-danger">{props.task.iscompleted ? 'yes' : 'No'}</span></p>
        </div>
    )
}
export default Todo;