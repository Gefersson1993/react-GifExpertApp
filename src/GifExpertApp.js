
import React, { Fragment, useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {
    //     // 2 maneras de hacer
    //     setCategories([...categories, 'Dragon Ball Super']);
    //     // setCategories( catgs => [...catgs, 'Dragon Ball Super']);
    // }
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>

            <hr></hr>

            <ol>
                {
                categories.map(category => (
                    <GifGrid 
                        key={ category }
                        category={category}
                    />
                ))
                }
            </ol>
        </Fragment>
    )
}


        

