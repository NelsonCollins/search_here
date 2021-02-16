import React, {useState} from 'react';
import  './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../components/reducer';

//State is how you declare a variable in react
function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault ();

        // console.log("You hit meeee ", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        //Do something with the input...
        history.push('/search')

    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ?(
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Search Here!</Button> 
                <Button variant="outlined">I'm Feeling Pumped!</Button>
            </div>
            ): (
            <div className="search__buttons">
                <Button  className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Search Here!</Button> 
                <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Pumped!</Button>
            </div>
            )}
           
        </form>
    )
}

export default Search
