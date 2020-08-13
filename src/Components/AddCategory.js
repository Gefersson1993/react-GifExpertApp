
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        //Validacion
        if( inputValue.trim().length > 2 ){
        setCategories( catgs => [ inputValue, ...catgs ]);
        setInputValue('');    
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
              type="text"
              value={ inputValue }
              onChange={ handleInputChange }>
            </input>
        </form>  
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}