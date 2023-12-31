import React, { useState } from 'react';
import './Styler/Header.css';
import DropDown from './DropDown.js';
import HamburgerDrop from './HamburgerDrop.js';
import { Turn as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [mouseEnterSyllabus, setMouseEnterSyllabus] = useState(false);
  const [mouseEnterNotes, setMouseEnterNotes] = useState(false);
  const [mouseEnterQuestionPaper, setMouseEnterQuestionPaper] = useState(false);

  const stuffinheader = (
    <div className='navbar'>
      <div className='navbar-item'>
        <Link to={'/syllabus'}>
        <div className='syllabusH' onMouseEnter={() => setMouseEnterSyllabus(true)} onMouseLeave={() => setMouseEnterSyllabus(false)}>
          <p>Syllabus</p>
          <img src={require('./images/syllabus.png')} alt='Syllabus Icon' />
        </div>
        </Link>
        <Link to={'/notes'}>
        <div className='notesH' onMouseEnter={() => setMouseEnterNotes(true)} onMouseLeave={() => setMouseEnterNotes(false)}>
          <p>Notes</p>
          <img src={require('./images/notes.png')} alt='Notes Icon' />
        </div>
        </Link>
        <Link to={'/questionpapers'}>
        <div className='questionPaperH' onMouseEnter={() => setMouseEnterQuestionPaper(true)} onMouseLeave={() => setMouseEnterQuestionPaper(false)}>
          <p>Question Papers</p>
          <img src={require('./images/question-papers.png')} alt='Question Papers Icon' />
        </div>
        </Link>
        <Link to={'/contact'}>
        <div className='contactH'>
          <p>Contact</p>
          <img src={require('./images/contact.png')} alt='Contact Icon' />
        </div>
        </Link>
      </div>
    </div>
  );

  const [open, setOpen] = useState(false);

  return (
    <nav>
    <div>
      <div className='Wrapper'>
        <Link to={'/NotKTUnOTES'} className='Homie'>
        <div className='logostuff' >
          <img src={require('./images/book.png')} className='book' alt='Book Icon' />
          <h1 className='Logosidename'>NotKTUnOTES</h1>
        </div>
        </Link>
        {stuffinheader}

        <div className='hamburger'>
          <Hamburger   toggled={open} toggle={setOpen} size={35} duration={0.3} color='linear-gradient(to right, #382bf0,#5e43f3, #9171f8)' direction='left'/>
        </div>
      </div >
       
       <div className='idkman'>
        <HamburgerDrop open={open} />
       </div>
      <DropDown mouseEnterSyllabus={mouseEnterSyllabus} mouseEnterNotes={mouseEnterNotes} mouseEnterQuestionPaper={mouseEnterQuestionPaper}/>
    </div>
    </nav>
  );
};

export default Header;


