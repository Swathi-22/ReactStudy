import './App.css'
import Header from './components/Header';
function App() {
  var data ='swathi'
  return (
    <div>
        <Header data={data}/>
        <p className='hello'>loremloremlorem {data}</p>
        <Hello/>
        <Hello/>
        <Hello/>
    </div>
  );
}

export default App;


function Hello(){
  return(<h1 style={{backgroundColor:'red'}}>Hello World</h1>)
}