import './googleAdv.scss';

import React from 'react'

export default function GoogleAdv() {
    return (
        <div>
            tu wyszukuje w google advanced
            <form action="https://google.com/search">
            <input type="text" name="q"/>
            <input type="submit" value="Google Advanced Search"/>
             </form>
        </div>
    )
}
