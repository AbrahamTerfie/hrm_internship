



import React from 'react';
import './EmpCard.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const MenuCards = (props) => {
    return (
        <div>

            <Row className="menucard">
                <Col className="indivusalCard">
                    <Card body inverse color="info">
                        <CardTitle tag="h5">Employee Management</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

                    </Card>
                </Col>
                <Col className="indivusalCard">
                    <Card body inverse color="warning">
                        <CardTitle tag="h5">Payroll</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

                    </Card>
                </Col>
                <Col className="indivusalCard">
                    <Card body inverse color="danger">
                        <CardTitle tag="h5">Leave</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

                    </Card></Col>
            </Row>
        </div>
    );
};

export default MenuCards;