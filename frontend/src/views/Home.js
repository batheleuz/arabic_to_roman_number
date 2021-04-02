import { Component } from "react";
import {Jumbotron, Container, Row, Col, Form, Button, Alert, } from 'react-bootstrap';
import axios from 'axios';
import {API_URL} from '../GLOBALS';

export default class Home extends Component {
    
    state = {
        showAlert : false,
        arabicNumber : 0,
        alertColor: 'success',
        alertMessage: null,
    }

    async getNumeralRoman() {

        if (false === this.validateNumber()) {
            return;
        }

        try {
            const response = await axios({
                method : 'GET',
                baseURL : API_URL,
                url : 'numeral-romain/' + this.state.arabicNumber,
                async : true,
                crossDomain : true,
            });

            this.setState({
                showAlert : true,
                alertColor : 'success',
                alertMessage : 'numeral roman : ' + response.data.numeralRoman,
            })
        } catch (e) {
            this.setState({
                showAlert : true,
                alertColor : 'danger',
                alertMessage : 'server is not responding',
            })
        }
    }

    validateNumber() {
        if (100 < this.state.arabicNumber) {
            this.setState({
                showAlert : true,
                alertColor : 'warning',
                alertMessage : 'Choose a number between 0 et 100',
            })

            return false;
        }

        return true;
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
                        <Form.Control type="number" max={100} min={1} placeholder="Nombre à transformer" onChange={(e) => this.setState({arabicNumber : e.target.value})} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                {
                    this.state.showAlert 
                    ? <Alert variant={this.state.alertColor} onClose={() => this.setState({showAlert : false })} dismissible>
                        <Alert.Heading> Message </Alert.Heading>
                        <hr/>
                        <h3> { this.state.alertMessage } </h3>
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
