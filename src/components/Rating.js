import {FaStar} from 'react-icons/fa';
import React from 'react'


function Rating({rate}) {
  return (
    Array(5).fill().map( (item,i) => <Star key={i} selected={rate>i}/>)
  )
}
const Star = ({selected})=><FaStar color={selected ? 'red':'grey'} />
export default Rating;