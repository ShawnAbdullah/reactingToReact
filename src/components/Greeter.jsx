import React from 'react';

const Greeter = ({ phrase, name }) => {
    return (
        <div>
            <h1>
                {phrase}, {name}!
            </h1>
        </div>
    )
}

export default Greeter;