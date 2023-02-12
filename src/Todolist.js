import react from 'react';
import './todo.css'

const TodoList =(props)=>{

    const handleCheck= (event) =>{
    console.log(event.target.checked);
    props.onSelectList(event.target.value); 

    }
   return <div >
        <h1>To Do</h1>
        <div className = 'list'>
       {props.list.map((item, index) => (
      <div key={index} className="checkBoxList">
     <input type="checkbox" onChange={handleCheck} value={item.todo}  />
     <span>{item.id}.{item.todo}</span>
   </div>
))}
</div>
    </div>

}

export default TodoList;