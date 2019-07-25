import React, { useState } from 'react'

export default function SearchPlayer(props) {
    const [ state, setState ] = useState({
        name: ''
    })
    const changeHandler = e => {        
        setState({
            name: e.target.value
        })
    }
    
    const SubmitHandler = e => {
        e.preventDefault();
        setState({name: ''});
        props.search(state.name)
    }

    return (
        <div> 
            <form onSubmit={SubmitHandler}>       
                <input
                type='text'
                value={state.name}
                name='search'
                placeholder="Enter a player's name"
                onChange={changeHandler}
                />
                <button>Search Player</button>
            </form>                
        </div>
    )
}
