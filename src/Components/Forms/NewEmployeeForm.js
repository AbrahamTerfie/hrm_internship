

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

const NewEmployeeForm = (props) => {
    return (
        <Form>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup></Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup></Col>
            </Row>
            <FormGroup>
                <Label for="exampleSelect">Positon</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option> Positon 1</option>
                    <option>Positon  2</option>
                    <option>Positon  3</option>
                    <option>Positon 4</option>
                    <option>Positon 5</option>
                </Input>
            </FormGroup>

            <Row>
                <Col>
                    <FormGroup>
                        <Label for="exampleText">Job Description </Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Col>
                <Col style={{
                    marginTop: '2em'
                }}>
                    <FormGroup>
                        <Label for="exampleFile">Resume</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Select Employees Resume from local storage
                        </FormText>
                    </FormGroup>
                </Col>
            </Row>



            {/* <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
                    </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Option three is disabled
                    </Label>
                </FormGroup>
            </FormGroup> */}
            <FormGroup
                style={{
                    marginTop: '2em'
                }}
                check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    will start working starting from this day
                </Label>
            </FormGroup>

            <Row>
                <Button color="danger" outline block > Submit</Button>

            </Row>
        </Form>
    );
}

export default NewEmployeeForm;