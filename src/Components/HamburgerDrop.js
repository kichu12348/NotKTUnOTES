import React from 'react';
import './Styler/Hamburger.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className={`fixed-hamburger ${hamburgerClass}`}>
      <div className='hamburger-item'>
        <Link to={'/syllabus'} className='noDecoHam'>
       <div className='syllabus' >
             <img src={require('./images/downArrow.png')}    className='downArrow3' onClick={()=>{setDropdown3(!dropdown3); setDropdown2(false); setDropdown(false);}}/>  
             <p className='items'>Syllabus</p>
             <img src={require('./images/syllabus.png')} className='image'/>
        </div>
        </Link>
         <div className={drop3}>
          <p><Link className='noDecoHamINH'>2024 Notes</Link></p>
          <p><Link to={'/KTU_2019Notes'} className='noDecoHamINH'>2019 Notes</Link></p>
         </div>
         <Link to={'/notes'} className='noDecoHam'>
        <div className='notes' >
             <img src={require('./images/downArrow.png')}    className='downArrowA' onClick={()=>{setDropdown(!dropdown); setDropdown2(false); setDropdown3(false);}}/>
             <p href='' className='items'>Notes</p>
             <img src={require('./images/notes.png')} className='image'/>
        </div>
        </Link >
        <div className={drop}>
          <p><Link className='noDecoHamINH'>2024 Notes</Link></p>
          <p><Link to={'/KTU_2019Notes'} className='noDecoHamINH'>2019 Notes</Link></p>
        </div>
        <Link to={'/questionpapers'} className='noDecoHam'>
           <div className='questionpaper' >
             <img src={require('./images/downArrow.png')}    className='downArrow2' onClick={()=>{setDropdown2(!dropdown2); setDropdown(false); setDropdown3(false);}}/>
             <p href='' className='items'>Question Papers</p>
             <img src={require('./images/question-papers.png')} className='image'/>
           </div>
           </Link>
            <div className={drop2}>
            <p><Link className='noDecoHamINH'>2024 Notes</Link></p>
            <p><Link to={'/KTU_2019Notes'} className='noDecoHamINH'>2019 Notes</Link></p>
            </div>
            <Link to={'/contact'} className='noDecoHam'>
           <div className='contacts'>
             <a href='' className='items'>Contact</a>
             <img src={require('./images/contact.png')} className='image'/>
           </div>
           </Link>
           <div className={idkbuttonT}>
             <a href='https://youtu.be/q-Y0bnx6Ndw?si=UgPOetbySrAWPYO8' ><button className='idkbutton'>IDK</button></a>
           </div>
           
         </div>
         
    </div>
  );
};

export default Hamburger;


