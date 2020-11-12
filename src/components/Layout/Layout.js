import React from 'react';
import Aux from '../../hoc/Auxiliary';//wrapper auxiliar

//este va a ser el componente que encierra todo el cuerpo del app (wrapper)
//usamos un high ordr component para tener varios elementos jsx sin requerir un padre
//caso que queremos tener un elemento wrapper
const lauyout = (props) =>(
    <Aux>
        <div>
            Toolbar, Sidebar, Backdrop
    </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default lauyout;