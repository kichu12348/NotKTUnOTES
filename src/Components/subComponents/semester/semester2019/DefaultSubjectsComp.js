import React from 'react'
import { Link } from 'react-router-dom';
import './DefaultSubjectsComp.css';

const DefaultSubjectsComp = () => {
     
     const engineeringStufff= (
        <div className='MainWrapENGDSSC'>

            <div className='SubWrapENGDSSC'>
                <Link className='noDecoDSSCC'>Engineering Physics A</Link>
                <Link className='noDecoDSSCC'>Engineering Graphics</Link>
                <Link className='noDecoDSSCC'>Engineering Chemistry</Link>
            </div>

            <div className='SubWrapENGDSSC'>
                <Link className='noDecoDSSCC'>Engineering Physics B</Link>
                <Link className='noDecoDSSCC'>Life Skills</Link>
                <Link className='noDecoDSSCC'>Engineering Mechanics</Link>
            </div>

        </div>
     )





  return (
    <div className='MainWrapDSSC'>
        <div className='SubWrapDSSC'>
         <Link className='noDecoDSSC'>Linear Algebra And Calculus</Link>
        </div>

        {engineeringStufff}

        <div className='SubWrapDSSC'>
          <Link className='noDecoDSSC'>Basics of Civil & Mechanical</Link>
          <Link className='noDecoDSSC'>Basics of Electrical & Electronics</Link>
        </div>

        <div className='SubWrapDSSC'>
           <Link className='noDecoDSSC'>Micro / BIT Notes</Link>
        </div>
    </div>
  )
}

export default DefaultSubjectsComp;