import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //obtener un array de keys de un objeto
    const transformedIngredients = Object.keys(props.ingredients)//obtenemos el arreglo de keys del objeto
                                    .map(igkey => { //iteramos por cada key
                                        return [...Array(props.ingredients[igkey])].map((_, i)=>{ //creamos un array del tamaño del valor del ingrediente y renderizamos por la cantidad de ingredientes
                                            return <BurgerIngredient key={igkey+i} type={igkey}/>
                                        }); 
                                    });

            
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;