import './googleAdv.scss';

import React from 'react';
import { Form, Button, InputGroup} from 'bootstrap-4-react';

export default function GoogleAdv() {
    return (
        <div style={{width:'50%'}}>
        <br/>
          <Form action="https://google.com/search">
          <label htmlFor='searchAdv'>Tu wyszukuje w advanced google, znajdź strony zawierające...</label>
          <InputGroup mb='2'>
          <label style={{width:'40%'}}>wszystkie te słowa:&nbsp;</label>
          <Form.Input type="text" className="form-control" id='searchAdv' name='q'/>
          </InputGroup>
          <InputGroup mb='2'>
          <label style={{width:'40%'}}>dokładnie to wyrażenie: &nbsp; </label>
          <Form.Input type="text" className="form-control" id='searchAdv' name='as_epq'/>
          </InputGroup>
          <InputGroup mb='2'>
          <label style={{width:'40%'}}>dowolne z tych słów: &nbsp; </label>
          <Form.Input type="text" className="form-control" id='searchAdv' name='as_oq'/>
          </InputGroup>
          <InputGroup mb='2'>
          <label style={{width:'40%'}}>żadne z tych słów: &nbsp; </label>
          <Form.Input type="text" className="form-control" id='searchAdv' name='as_eq'/>
          </InputGroup>
          <Button primary type="submit">Google Search</Button>

      </Form>
      </div>
    )
}
