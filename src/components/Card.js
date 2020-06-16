import React from 'react';


const Card = ({ username, email, id, name }) => { //pasas props como propiedades y el ya sabe como app se comunica con los hijos. Card puede saber cuales son las propiedades en app
    //const {username, email, id} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-3'>
            <div>
                <img alt='robots' src={`https://robohash.org/${id}}`} /> 
                <div>
                    <p>{id}</p>
                    <p>{name}</p>
                    {/* <p>{email}</p>
                    <h2>{username}</h2> */}
                    
                </div>
            </div>
        </div>
    );

}

export default Card;