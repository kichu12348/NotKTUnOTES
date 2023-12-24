import React from 'react'
import { Link } from 'react-router-dom'
import './DefaultSemComp.css'

const DefaultSemComp = (props) => {
  return (
    <div className='MainWrapDSC'>

      <div className='SubWrapDSC'>
      <Link className='noDecoDSC' to={props.s1}>
         <p>S1</p>
      </Link>
      <Link className='noDecoDSC' to={props.s2}>
         <p>S2</p>
      </Link>
      <Link className='noDecoDSC' to={props.s3}>
         <p>S3</p>
      </Link>
      <Link className='noDecoDSC' to={props.s4}>
         <p>S4</p>
      </Link>
      </div>

      <div className='SubWrapDSC'>
      <Link className='noDecoDSC' to={props.s5}> 
         <p>S5</p>
      </Link>
      <Link className='noDecoDSC' to={props.s6}>
         <p>S6</p>
      </Link>
      <Link className='noDecoDSC' to={props.s7}>
         <p>S7</p>
      </Link>
      <Link className='noDecoDSC' to={props.s8}>
         <p>S8</p>
      </Link>
      </div>

    </div>
  )
}

export default DefaultSemComp