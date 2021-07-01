import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Collapse,
} from "reactstrap";
import Header from "../Components/Header";
import ProfileCard from "../Components/Widgets/ProfileCard";
import NewEmployeeForm from "../Components/Forms/NewEmployeeForm";

const style = {
  margin: "30px",
};

export default function Employee() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Header />
      <Row style={style}>
        <Row style={style}>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <Button color="primary" outline block>
              Search
            </Button>
          </Col>
        </Row>

        <Row>
          <Button
            color="warning"
            outline
            block
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            Add New Employee
          </Button>

          <Collapse isOpen={isOpen}>
            <NewEmployeeForm />
          </Collapse>
        </Row>
      </Row>

      <div
        style={{
          padding: "1em",
          display: "flex",
          margin: "2em",
          justifyContent: "space-between",
        }}
      >
        <>
          <ProfileCard
            empName="Bisrategebriel Feseha"
            startedDate="11/11/1111"
            currentPositon="Student"
          />
          <ProfileCard
            empName="Bemeheret "
            startedDate="11/11/1111"
            currentPositon="Student"
          />{" "}
          <ProfileCard
            empName="Bahiru "
            startedDate="11/11/1111"
            currentPositon="Student"
          />{" "}
          <ProfileCard
            empName="Abenezer Seifu "
            startedDate="11/11/1111"
            currentPositon="Student"
          />{" "}
          <ProfileCard
            empName="Benias Feseha"
            startedDate="11/11/1111"
            currentPositon="Student"
          />{" "}
          <ProfileCard
            empName="Bekalu "
            startedDate="11/11/1111"
            currentPositon="Student"
          />
        </>
      </div>
    </div>
  );
}
