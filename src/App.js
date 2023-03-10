
import {useState, useEffect ,React} from 'react';
import './App.css';
import Display from './display';
import TodoList from './Todolist';
const API_URL = "https://dummyjson.com/todos";

function App() {

  const [todoList, settodoList] = useState([])
  const [displayList, setDisplayList] = useState([]);
  

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        settodoList(jsonResponse.todos);
      });
  }, []);

  const handleListChange=(props)=>{
    var listUpdate= [...displayList];
    console.log(props);
    var updatedList = [];
    if(props.checked) {
      listUpdate.push(props.item);
    }
    setDisplayList(listUpdate);
  }

  return (
    <div className="App">

      <Display display ={displayList}/>
      <TodoList list  ={todoList}  onSelectList={handleListChange}/>
    
    </div>
  );
}

export default App;
