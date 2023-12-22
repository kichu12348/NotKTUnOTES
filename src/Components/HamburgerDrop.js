import React from 'react';
import './Styler/Hamburger.css';
import { useState,useEffect } from 'react';

const Hamburger = (props) => {
  const open = props.open;
  const hamburgerClass = open ? 'hamburgermenu open' : 'hamburgermenu';
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2,setDropdown2] = useState(false);
  const [dropdown3,setDropdown3] = useState(false);
  const drop = dropdown ? 'downmenuOpen' : 'downmenu';
  const drop2 = dropdown2 ? 'questionPaperDownMenuB' : 'questionPaperDownMenuA';
  const drop3 = dropdown3 ? 'syllabusDropDownA' : 'syllabusDropDownB';
  const idkbuttonT = open ? 'idkButtonT' : 'idkButtonF';

  useEffect(() => {
    if (!open) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    }

    
  }, [open, dropdown, dropdown2, dropdown3]);
  
  return (
    <div className={hamburgerClass}>
      <div className='hamburger-item'>
       <div className='syllabus' onClick={()=>{setDropdown3(!dropdown3); setDropdown2(false); setDropdown(false);}}>
             <img src={require('./images/downArrow.png')}    className='downArrow3'/>  
             <p className='items'>Syllabus</p>
             <img src={require('./images/syllabus.png')} className='image'/>
        </div>
         <div className={drop3}>
          <a>2024</a>
          <a>2019</a>
         </div>
        <div className='notes' onClick={()=>{setDropdown(!dropdown); setDropdown2(false); setDropdown3(false);}}>
             <img src={require('./images/downArrow.png')}    className='downArrowA'/>
             <p href='' className='items'>Notes</p>
             <img src={require('./images/notes.png')} className='image'/>
        </div>
        <div className={drop}>
          <a>2024 Notes</a>
          <a>2019 Notes</a>
        </div>
           <div className='questionpaper' onClick={()=>{setDropdown2(!dropdown2); setDropdown(false); setDropdown3(false);}}>
             <img src={require('./images/downArrow.png')}    className='downArrow2'/>
             <p href='' className='items'>Question Papers</p>
             <img src={require('./images/question-papers.png')} className='image'/>
           </div>
            <div className={drop2}>
              <a>2024</a>
              <a>2019</a>
            </div>
           <div className='contacts'>
             <a href='' className='items'>Contact</a>
             <img src={require('./images/contact.png')} className='image'/>
           </div>
           
         </div>
         <div className='idkbutton'>
            <a href='https://youtu.be/q-Y0bnx6Ndw?si=UgPOetbySrAWPYO8'><button className={idkbuttonT}>IDK</button></a>
         </div>
    </div>
  );
};

export default Hamburger;


