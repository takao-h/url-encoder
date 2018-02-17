import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Decode extends React.Component {

  render(){
    return(
      <Form>
        <FormGroup row>
        <Label for="URL" md={2}>URL</Label>
        <Col md={10}>
          <Input type="text" name="URL" id="URL" placeholder="URL" />
        </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="encodedURL" md={2}>encoded URL</Label>
        <Col md={10}>
          <Input type="text" name="encodedURL" id="encodedURL" placeholder="deencoded URL" />
        </Col>
        </FormGroup>
        <Button>Encode</Button>
      </Form>
    );
  }
}
