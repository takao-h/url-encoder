import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class Encode extends React.Component {
	
	render(){
		return(
			<Form>
			  <FormGroup row>
			  <Label for="URL" sm={2}>URL</Label>
			  <Col sm={10}>
				  <Input type="text" name="URL" id="URL" placeholder="URL" />
			  </Col>
		    </FormGroup>
	  	  <FormGroup row>
			  <Label for="encodedURL" sm={2}>encoded URL</Label>
			  <Col sm={10}>
				  <Input type="text" name="encodedURL" id="encodedURL" placeholder="encoded URL" />
			  </Col>
		    </FormGroup>
        <Button>Encode</Button>
      </Form>
		);
	}
 }
 export default Encode;
