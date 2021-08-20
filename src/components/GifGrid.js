import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <Fragment>
            {/* <pre>{JSON.stringify(loading)}</pre> */}
            <h3>{ category }</h3>       

            {loading && <p className="animate__animated animate__flash">Loading</p>}     
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        { ...img }
                        />                              
                    ))
                }                        
            </div>
        </Fragment>
        
    )
}
