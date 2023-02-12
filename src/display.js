import react from 'react';
import './display.css'


const  Display =(props)=> {
    console.log(props);
    return <div >
       <h1>I did it!</h1>
       <div className= "display">
           <div className="flex-container">
       {props.display.map((item, index) => (
      <div>{item}
       </div>
       
       ))}
       </div>
    </div>
    </div>
}


export default Display;