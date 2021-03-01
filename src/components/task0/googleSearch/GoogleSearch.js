import './googleSearch.scss';

import React from 'react';
import { Form, Button, InputGroup} from 'bootstrap-4-react';

export default function GoogleSearch() {
    return (
        <div style={{width:'50%'}}>
          <br/>
            <Form action="https://google.com/search">
            <label htmlFor='search'>Tu wyszukuje w googlach:</label>
            <InputGroup mb='2'>
            <Form.Input type="text"  class="form-control" id='search'/>
            <Button primary type="submit">Google Search</Button>
            </InputGroup>
        </Form>
        </div>
    )
}
