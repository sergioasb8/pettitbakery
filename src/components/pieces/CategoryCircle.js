import React from 'react'
import '../../assets/styles/Categories.css';

export const CategoryCircle = ({name,id,active,handleActive,imgCat}) => {
  return (
    <div className='CategoryCircle'>
      <img 
        className={id===active ? "categoryImage active" : "categoryImage"} 
        active={active}
        onClick={()=>handleActive(id,name)}
        src={imgCat} 
        alt='IconCategory' 
      />
    </div>
  )
}
