import React from 'react';
import style from './recipe.module.css'

const Recipe = ({tittle, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 >{tittle}</h1>
            <img className={style.image} src={image} alt=''></img>
            <ol>
                <strong>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
                </strong>
            </ol>
            <p><strong>Calories:</strong> {calories}</p>
        </div>
    );
}

export default Recipe;