import './googleImage.scss';

import React from 'react'

export default function GoogleImage() {
    return (
        <div>
            tutaj wyszukje w google images
             <form action="https://google.com/search">
            <input type="text" name="q"/>
            <input type="submit" value="Google Image Search"/>
             </form>
        </div>
    )
}
