import './App.css';
import Header from './Components/Header';
import { useState,useEffect} from 'react';


function App() {

  const [tapped,setTapped] = useState(false);
  useEffect(() => {setTapped(!tapped)},[]);


  return (
    <div className="App" onClick={()=>{setTapped(!tapped)}}>
      <Header tapped={tapped}/>
      
    </div>
    
  );
}

export default App;
