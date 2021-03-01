import './googleImage.scss';

import React, {useState} from 'react';
import { Form, Button, InputGroup} from 'bootstrap-4-react';

export default function GoogleImage() {
    const [search, setSearch] = useState('');

const handleChange = (e) => {
    setSearch(e.target.value);
}

const handleClick = (e) => {
        window.open(`https://google.com/search?tbm=isch&q=${search}`);

    }

    return (
        <div style={{width:'50%'}}>
        <br/>
            <Form onSubmit={handleClick}>
            <label htmlFor='image'>Tutaj szukam w obrazach</label>
            <InputGroup mb='2'>
            <Form.Input  class="form-control" type="text" id='image' onChange={handleChange}/>
            <Button primary type="submit">Search Image</Button>
            </InputGroup>
            </Form>
        </div>
    )
}
