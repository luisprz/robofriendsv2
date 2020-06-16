import React from 'react';
import Card from './Card';
//import ErrorBoundry from './ErrorBoundry';

/*
const Cardlist = ({robots}) => {
    const cardsArray = robots.map((use, i) => {
        return (<Card 
        key={robots[i].id} 
        id={robots[i].id} 
        username={robots[i].username} 
        email={robots[i].email}

        />); //index.js:1 Warning: Each child in a list should have a unique "key" prop. Esto hace que al borrar algo solo se rendee esa parte y no toda la pagina

    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default Cardlist;

*/
const Cardlist = ({ robots }) => {
/*     if (true) {
        throw new Error('Nooo!');
    } */
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            username={robots[i].username}
                            email={robots[i].email}
                            name={robots[i].name}
                        />
                    ); //index.js:1 Warning: Each child in a list should have a unique "key" prop. Esto hace que al borrar algo solo se rendee esa parte y no toda la pagina
                })
            }
        </div>
    );
}

export default Cardlist;
