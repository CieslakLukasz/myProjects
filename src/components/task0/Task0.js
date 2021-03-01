import React, {useState} from 'react';
import { Button, ButtonGroup } from 'bootstrap-4-react';

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
        <ButtonGroup aria-label="Basic example">
        <Button secondary onClick={handleClick} value='search'>google search</Button>
        <Button secondary onClick={handleClick} value='image'>google images</Button>
        <Button secondary onClick={handleClick} value='advanced'>google advanced</Button>
        </ButtonGroup>
        <br/>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {search==='search'? <GoogleSearch/> : search==='image' ? <GoogleImage/> : <GoogleAdv/>}
        </div>
        </div>
    )
}

