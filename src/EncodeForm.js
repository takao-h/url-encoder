import React from 'react';
import { Button, Col ,Label } from 'reactstrap';

 class Encode extends React.Component {

	render(){
		return(
      <div row>
      <Label for="URL" sm={2}>URL</Label>
      <Col sm={10}>
			  <textarea name="URL" id="URL" placeholder="URL" ></textarea>
      </Col>
      <Col sm={{ size: 10, offset: 2 }}>
      <Button>ENCODE</Button>
      </Col>
      </div>
		);
	}
 }
 export default Encode;
