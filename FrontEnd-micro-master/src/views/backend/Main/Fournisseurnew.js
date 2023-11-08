import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Fournisseurnew = () => {
    //get data form
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");
    const [email, setEmail] = React.useState("");

    const history = useHistory();

    // add fournisseur axios post request
    const addFournisseur = () => {
        console.log(nom, prenom, email);
        axios
            .post("http://localhost:8099/fournisseurs/", {
                nom: nom,
                prenom: prenom,
                email: email,
            })
            .then(() => {
                alert("fournisseur added");
                history.push("/fournisseur");
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addFournisseur();
    }

    

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb p-0 mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/fournisseur">Fournisseurs</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Fournisseur
                    </li>
                  </ol>
                </nav>
              </div>
              <Link
                to="/fournisseur"
                className="btn btn-primary btn-sm d-flex align-items-center justify-content-between"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Back</span>
              </Link>
            </div>
          </Col>
          <Col lg="12" className="mb-3 d-flex justify-content-between">
            <h4 className="font-weight-bold d-flex align-items-center">
              New Fournisseur
            </h4>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Row>
              <Col lg="6">
                <h5 className="font-weight-bold pb-3">Card Details</h5>
                <Form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-12 mb-3">
                    <Form.Label
                      htmlFor="Text1"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Nom
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="nom"
                      placeholder="Nom fournisseur"
                      onChange={(e) => {
                        setNom(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <Form.Label
                      htmlFor="Text2"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Prenom
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="prenom"
                      placeholder="Prenom fournisseur"
                      onChange={(e) => {
                        setPrenom(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <Form.Label
                      htmlFor="Text3"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="email fournisseur"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <button type="submit" className="btn btn-primary">
                      Add Fournisseur
                    </button>
                  </div>
                </Form>
              </Col>
              <Col lg="6"></Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Fournisseurnew;
