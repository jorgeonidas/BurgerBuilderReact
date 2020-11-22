import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';//wrapper auxiliar
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

//este va a ser el componente que encierra todo el cuerpo del app (wrapper)
//usamos un high ordr component para tener varios elementos jsx sin requerir un padre
//caso que queremos tener un elemento wrapper
class Lauyout extends Component {

    state={
        showSideDrawer: false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        //setear un estado que depende de un estado anterior
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>);
    }
};

export default Lauyout;