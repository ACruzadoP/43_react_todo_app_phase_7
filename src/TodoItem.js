import React from "react"

function TodoItem(props) {

    let typeOfStyle = props.item.completed ? "todo-item-2" : "todo-item"
    
    return (
        <div className={typeOfStyle}>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem