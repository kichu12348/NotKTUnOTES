import './App.css';
import Header from './Components/Header';
import { useState,useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import Notes from './Components/subComponents/Notes';
import Syllabus from './Components/subComponents/Syllabus';
import QuestionPaper from './Components/subComponents/QuestionPaper';
import Contacts from './Components/subComponents/Contacts';
import DefaultCourseComponent from './Components/subComponents/semester/Course/DefaultCourseComponent';
import DefaultSemComp from './Components/subComponents/semester/semester2019/DefaultSemComp';
import DefaultSubjectsComp from './Components/subComponents/semester/semester2019/DefaultSubjectsComp';

function App() {

  const [tapped,setTapped] = useState(false);
  useEffect(() => {setTapped(!tapped)},[]);


  return (
    <div className="App" onClick={()=>{setTapped(!tapped)}}>
      <Header tapped={tapped}/>
      <Routes>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
        <Route path='/questionpapers' element={<QuestionPaper/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/KTU_2019Notes' element={<DefaultSemComp s1='/KTU_2019Notes/S1' s2={'/KTU_2019Notes/S2'} s3={'/KTU_2019Notes/S2'} s4={'/KTU_2019Notes/S2'} s5={'/KTU_2019Notes/S2'} s6={'/KTU_2019Notes/S2'} s7={'/KTU_2019Notes/S2'} s8={'/KTU_2019Notes/S2'} />} />
        <Route path='/KTU_2019Notes/S1' element={<DefaultSubjectsComp/>}/>
        <Route path='/KTU_2019Notes/S2' element={<DefaultCourseComponent sem={'S2'}/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
