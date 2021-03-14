import React, { useContext, useState } from 'react'
import '../assets/styles/CakeCategories.css';
import { Context } from '../components/context/Context'
import { CategorySize } from "../components/pieces/CategorySize";

export const CakeCategories = () => {

    const {setIdSize,setSizeName,cakesize} = useContext(Context);

    const [activeCat, setActiveCat] = useState(5);

    const handleActiveCat = (sizeActive, nameSize) => {
        setActiveCat(sizeActive);
        setIdSize((idSize)=>idSize=sizeActive)
        setSizeName((nameSiz)=>nameSiz=nameSize)
    }
    
    return (
        <div className="CakeCatContainer">
            {
                cakesize.map(({id, nameCat})=>(

                    <CategorySize
                        key={id}
                        name={nameCat}
                        id={id}
                        handleActive={handleActiveCat}
                        active={activeCat}
                    />
                ))
            }
        </div>
    )
}