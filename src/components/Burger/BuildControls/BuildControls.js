import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controlls =[
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
];
const buildControls = (props) =>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controlls.map(control =>(
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)} /* callback a funcion para agregar ingrediente que recibe el type de ingrediente */
                    removed={()=> props.ingredientRemoved(control.type)}/* callback a funcion para remueve ingrediente que recibe el type de ingrediente */
                    disabled = {props.disabled[control.type]}/>//chequea si el tipo esta deshabilitado ej {salad : true}
            ))}
            <button className={classes.OrderButton} disabled={!props.purcheasable} >ORDER NOW</button>
        </div>
    );
}

export default buildControls;