import React from 'react'
import { Link } from 'react-router-dom'
import './DefaultCourseComp.css'

const DefaultCourseComponent = (props) => {
  return (
    <div className='MainWrapCourse'>
        <div className='semDivDCC'>Semester: {props.sem}</div>
        <div className='SubMainWrapCourse'>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/mech.png')}/>
           <p>Mech</p>
        </Link>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/civil.png')}/>
           <p>Civil</p>
        </Link>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/it.png')}/>
           <p>I-T</p>
        </Link>
        </div>

        <div className='SubMainWrapCourse'>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/cse.png')} />
           <p>CSE</p>
        </Link>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/ece.png')}/>
           <p>ECE</p>
        </Link>
        <Link className='noDecoDCC'>
           <img src={require('./CourseCompIMG/ee.png')}/>
           <p>EE</p>
        </Link>
        </div>

    </div>
  )
}

export default DefaultCourseComponent