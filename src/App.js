import './App.css'
import Header from './components/Header';
import Counter from './components/Counter';
import {useState} from 'react'
function App() {
  var data ='swathi'
  
  const [counts,setCount] = useState(0)
  const addCount=()=>{
    setCount(counts+1)
  }
  let obj={
    title:'1st Counter',
    counts
  }
  return (
    <div>
        <Header data={data}/>
        <Hello/>
        <p className='hello'>loremloremlorem {data}</p> 
        <button onClick={addCount}>Add</button>
        {/* <Counter title='1st Counter' counts = {counts} /> */}
        <Counter {...obj} />  {/* spread operator */}
        <Counter title='2nd Counter' counts = {counts} />
        
        
    </div>
  );
}

export default App;


function Hello(){
  return(<h1 style={{backgroundColor:'red'}}>Hello World</h1>)
}