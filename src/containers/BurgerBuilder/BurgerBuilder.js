import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.7,
    meat: 1.3,
}

class BurgerBulder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }

    state ={
        ingredients :{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purcheaseable: false
    };

    //recibe el objeto ingredientes y lo mapea a un arreglo de enteros para sumarlos y saber si puede comprar la hamburguesa
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purcheaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        //creo nuevo objeto copia del estado viejo
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //actualizo en la copia
        updatedIngredients[type] = updateCount;
        //busco precio de ingrediente y lo agrego
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        //actualizo estado con las copias actualizadas
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0){
            return;
        }

        const updateCount = oldCount - 1;
        //creo nuevo objeto copia del estado viejo
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //actualizo en la copia
        updatedIngredients[type] = updateCount;
        //busco precio de ingrediente y lo agrego
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        //actualizo estado con las copias actualizadas
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        //creo un objeto copiando los valores de los ingrdientes
        const disabledInfo = {
            ...this.state.ingredients
        }
        //de valores numericos a booleanos para saber cuales botones deshabilitar
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    purcheasable={this.state.purcheaseable}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBulder;