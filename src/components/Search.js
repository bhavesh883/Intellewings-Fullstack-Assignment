import React from 'react';
import './App.css';
import {useState} from 'react'


const Search = ({setSearch,hide}) =>
{
    
    return <div class="Search">
        <input onChange={(e)=>setSearch(e.target.value)} placeholder='Search'></input>
        <button onClick={hide}>Add Contact</button>
    </div>
}

export default Search