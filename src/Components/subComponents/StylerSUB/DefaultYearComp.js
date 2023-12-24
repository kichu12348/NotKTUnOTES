import React from 'react'
import { Link } from 'react-router-dom'
import './DefaultYearComp.css'
const DefaultYearComp = (props) => {
  return (
    <div className='stylo'>
    <Link className='noDecoYC' to={props.Link2024}>
     <button className='button_2019'>2024 KTU {props.title}</button>
    </Link>

    <Link className='noDecoYC' to={props.Link2019}>
      <button className='button_2024'>2019 KTU {props.title}</button>
    </Link>
    </div>
  )
}

export default DefaultYearComp