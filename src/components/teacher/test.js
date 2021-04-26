import React from 'react';

function Test({ options, onChange }) {
    return (
        options.map(option=><div onClick={(e) => {onChange(e, option)} }>{option.name} </div>)
    );
}

export default Test;