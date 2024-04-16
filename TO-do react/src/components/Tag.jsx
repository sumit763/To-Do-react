import React from 'react'
import "./Tag.css";
const Tag = ({tagName,selectTags, selected}) => {

  const tagStyle = {
    HTML : {backgroundColor : "#fda821"},
     CSS : {backgroundColor : "#15d4c8"},
     Javascript : {backgroundColor : "#ffd12c"},
    React : {backgroundColor : "#4cdafc"},
     default : {backgroundColor : "#f9f9f9"}
  }

  return (
    <button type="button" className='tag'style={selected ? tagStyle[tagName] : tagName.default} onClick={()=>{selectTags(tagName)}}>{ tagName }</button>
  )
}

export default Tag