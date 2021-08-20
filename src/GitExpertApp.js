import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {        
    //     // setCategories([...categories, 'Super Campeones']);
    //     setCategories( cats => [...cats, 'Super Campeones']);
    // }

    return (
        <>
            <h2>GitExpertApp</h2>    
            <hr/>
            <AddCategory setCategories = { setCategories } />            
            
            { 
                categories.map( category => (
                <GifGrid   
                    key={ category }                  
                    category = { category } />
                ))
            }           
        </> 
    )           
}

export default GitExpertApp
