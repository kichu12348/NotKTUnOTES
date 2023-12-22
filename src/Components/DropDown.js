import React from 'react';
import './Styler/DropDown.css';
import { useState,useEffect } from 'react';

const DropDown = (props) => {
  //Notes drop down
  const [Mnotes, setMnotes] = useState(false);
  const [MnotesF, setMnotesF] = useState(false);

  useEffect(() => {
    if (props.mouseEnterNotes || MnotesF) {
      setMnotes(true);
    }
    else{
      setMnotes(false);
    }});
  const Notes = Mnotes ? 'notesD' : 'notesDClose'

  //Question Paper drop down
  const [MquestionPaper, setMquestionPaper] = useState(false);
  const [MquestionPaperF, setMquestionPaperF] = useState(false);
  useEffect(() => {
    if (props.mouseEnterQuestionPaper || MquestionPaperF) {
      setMquestionPaper(true);
    }
    else{
      setMquestionPaper(false);
    }
  });
  const QuestionPaper = MquestionPaper ? 'questionPaperD' : 'questionPaperDClose'

  //Syllabus drop down
  const [Msyllabus, setMsyllabus] = useState(false);
  const [MsyllabusF, setMsyllabusF] = useState(false);
  useEffect(() => {
    if (props.mouseEnterSyllabus || MsyllabusF) {
      setMsyllabus(true);
    }
    else{
      setMsyllabus(false);
    }
  });
  const Syllabus = Msyllabus ? 'syllabusD' : 'syllabusDClose'
  

  return (
    <div className='dropdownD' >
      <div className={Syllabus} onMouseEnter={()=>{setMsyllabusF(true)}} onMouseLeave={()=>{setMsyllabusF(false)}}>
        <p>2019</p>
        <p>2018</p>
      </div>
      <div className={Notes} onMouseEnter={()=>{setMnotesF(true)}} onMouseLeave={()=>{setMnotesF(false)}}>
        <p>2018</p>
        <p>2017</p>
      </div>
      <div className={QuestionPaper} onMouseEnter={()=>{setMquestionPaperF(true)}} onMouseLeave={()=>{setMquestionPaperF(false)}}>
        <p>2017</p>
        <p>2016</p>
      </div>
    </div>
  );
};

export default DropDown;

