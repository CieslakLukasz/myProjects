import React, {useState} from 'react';

import GoogleSearch from './googleSearch/GoogleSearch';
import GoogleImage from './googleImage/GoogleImage' ;
import GoogleAdv from './googleAdv/GoogleAdv';

export default function Task0() {
const [search, setSearch] = useState('search');

const handleClick = (e) => {
  setSearch(e.target.value)
}

    return (
        <div>
        <ul>
        <li><button onClick={handleClick} value='search'>google search</button></li>
        <li><button onClick={handleClick} value='image'>google images</button></li>
        <li><button onClick={handleClick} value='advanced'>google advanced</button></li>
        </ul>
        {search==='search'? <GoogleSearch/> : search==='image' ? <GoogleImage/> : <GoogleAdv/>}
        </div>
    )
}

