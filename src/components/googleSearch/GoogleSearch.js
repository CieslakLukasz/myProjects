import './googleSearch.scss';

import React from 'react'

export default function GoogleSearch() {
    return (
        <div>
            tu wyszukuje w googlach:
            <form action="https://google.com/search">
            <input type="text" name="q"/>
            <input type="submit" value="Google Search"/>
        </form>
        </div>
    )
}
