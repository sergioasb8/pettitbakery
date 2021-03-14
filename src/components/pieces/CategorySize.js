import React from 'react'
import '../../assets/styles/CakeCategories.css';

export const CategorySize = ({name,id,active,handleActive}) => {
    return (
        <div 
            className={id===active ? "SizeContainer active" : "SizeContainer"} 
            active={active}
            onClick={()=>handleActive(id,name)}
        >
            {name}
        </div>
    )
}