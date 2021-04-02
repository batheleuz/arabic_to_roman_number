import { Component } from "react";
import {Jumbotron, Container, Row, Col, Form, Button, Alert, } from 'react-bootstrap';
import axios from 'axios';
import {API_URL} from '../GLOBALS';

export default class Home extends Component {
    
    state = {
        showAlert : false,
        arabicNumber : 0,
        romanNumeral : null,
    }

    async getNumeralRoman() {
        const response = await axios({
            method : 'GET',
            baseURL : API_URL,
            url : 'numeral-romain/' + this.state.arabicNumber,
            async : true,
            crossDomain : true,
          });

        this.setState({
            showAlert : true,
            romanNumeral : response.data.numeralRoman,
        })
    }

    render() {
        return <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Welcome to test.jolimoi.com</h1>
            </Jumbotron>
            <Row className='d-flex' >
                <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Arabic number</Form.Label>
                        <Form.Control type="number" placeholder="Nombre à transformer" onChange={(e) => this.setState({arabicNumber : e.target.value})} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                {
                    this.state.showAlert 
                    ? <Alert variant="success" onClose={() => this.setState({showAlert : false })} dismissible>
                        <Alert.Heading> Roman numeral </Alert.Heading>
                        <hr/>
                        <h3> {this.state.romanNumeral} </h3>
                    </Alert> 
                    : null
                }
                </Col>
            </Row>
            <Row className='d-flex' >
                <Col sm={6}>
                    <Button onClick={() => this.getNumeralRoman()} >Valider</Button>
                </Col>
            </Row>
        </Container>;
    }
}
