import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball"]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }
        /* categories.push(newCategory); */
        setCategories([newCategory]);
        /* console.log("Rocket League") */
        /* console.log(newCategory); */
    }

    return (
        <>
            <h1>Gif APP</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                    /* <div key={category}>
                        <h3>{category}</h3>
                        <li>{category}</li>
                    </div> */
                ))
            }


        </>
    )
}
