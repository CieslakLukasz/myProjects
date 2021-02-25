import './googleImage.scss';

import React, {useState} from 'react'

export default function GoogleImage() {
    const [search, setSearch] = useState('');

const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
}

const handleClick = (e) => {
        window.open(`https://google.com/search?tbm=isch&q=${search}`);

    }

    return (
        <div>
            tutaj wyszukje w google images
             <form onSubmit={handleClick}>
            <input type="text" onChange={handleChange}/>
          <input type="submit"  value="Google Image Search"/>
             </form>
        </div>
    )
}
