import React from 'react';
import './searchbar.styles.scss';


const Searchbar = ({placeholder, handleChange , handleSubmit, value }) => (
    <form className="form-block" onSubmit={handleSubmit}>

    <input className="search" 
    value={value}
    type='search'
    onChange={handleChange}
    placeholder={placeholder}/>

    <button type="submit" className="search-button">search</button>

    </form>
);

export default Searchbar;