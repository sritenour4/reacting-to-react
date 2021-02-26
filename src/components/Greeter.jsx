import React from 'react';

const Greeter = ({name, phrase}) => {

    return(
        <h1>Hello, {name}! {phrase}</h1>
    )
}

export default Greeter;