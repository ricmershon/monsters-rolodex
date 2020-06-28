import React from 'react';
import './SearchBox.styles.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={ placeholder }
    onChange={ handleChange }
  />
)

export default SearchBox;