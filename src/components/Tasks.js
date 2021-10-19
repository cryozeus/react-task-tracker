import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        //Below we loop through the list, output a component and passing a task as a prop
        <>
         {tasks.map((task, index) => (
             <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle} />
             ))}   
        </>
    )
}

export default Tasks
