import './googleAdv.scss';

import React from 'react';
import { Form, Button, InputGroup} from 'bootstrap-4-react';

export default function GoogleAdv() {
    return (
        <div style={{width:'50%'}}>
        <br/>
          <Form action="https://google.com/search">
          <label htmlFor='searchAdv'>Tu wyszukuje w advanced google:</label>
          <InputGroup mb='2'>
          <Form.Input type="text"  class="form-control" id='searchAdv'/>
          <Button primary type="submit">Google Search</Button>
          </InputGroup>
      </Form>
      </div>
    )
}
