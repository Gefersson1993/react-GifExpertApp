
import React, { Fragment } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //se puede cambiar de nombre usando:
    const { data: images, loading } = useFetchGifs( category );

    return (

        <Fragment>
            <h2>{ category }</h2>
            
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-grid">
                 {
                    images.map(  img =>(
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                    ) )
                } 
            </div> 
        </Fragment>
        
    )
}
