import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //necesitamos transformar el objeto que guarda los ingredientes en un array de ingredientes
    let transformedIngredients = Object.keys(props.ingredients)//obtener un array de keys de un objeto
                                    .map(igkey => { //iteramos por cada key
                                        return [...Array(props.ingredients[igkey])].map((_, i)=>{ //por cada ingrediente mapeamos y creamos un array del tamaño de la cantidad de ingredientes para renderizar cada ingrediente
                                            return <BurgerIngredient key={igkey+i} type={igkey}/>
                                        }); 
                                    })
                                    .reduce((arr, el)=>{ //de un array de arrays a un array de objetos
                                        return arr.concat(el);
                                    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p> Please start adding ingredients! </p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;