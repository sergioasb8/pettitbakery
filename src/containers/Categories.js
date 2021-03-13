import React, { useContext, useState } from 'react'
import { CategoryCircle } from '../components/pieces/CategoryCircle';
import '../assets/styles/Categories.css'
import { Context } from '../components/context/Context'

export const Categories = () => {

    const {setIdCategory,setCategoryName,categories} = useContext(Context);

    const [active, setActive] = useState(1)

    // Asigno el color active a la categoria 
    // y paso el id yel nombre al contex
    const handleActive=(categoryActived, nameCategory)=>{
        setActive(categoryActived);
        setIdCategory((idCategory)=>idCategory=categoryActived)
        setCategoryName((nameCat)=>nameCat=nameCategory)
    }

    return (
        <div className="categoryBox" id="categoryBox">
            <div className="listCategories">
               {
                    categories.map(({id, nameCat, imgCat})=>(

                        <CategoryCircle
                            key={id}
                            name={nameCat}
                            id={id}
                            imgCat={imgCat}
                            handleActive={handleActive}
                            active={active}
                        />
                    ))
                }
            </div>
        </div>
    )
}