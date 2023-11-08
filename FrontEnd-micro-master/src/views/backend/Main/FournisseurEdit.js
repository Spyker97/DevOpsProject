import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const FournisseurEdit = () => {
  const { id } = useParams();
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const history = useHistory();

  //get data form api
  const getFournisseurByID = () => {
    axios.get(`http://localhost:8099/fournisseurs/${id}`).then((response) => {
      setNom(response.data.nom);
      setPrenom(response.data.prenom);
      setEmail(response.data.email);
    });
  };

  // update fournisseur axios put request
    const updateFournisseur = () => {
        axios.put(`http://localhost:8099/fournisseurs/${id}`, {
            nom: nom,
            prenom: prenom,
            email: email,
        }).then(() => {
            alert("fournisseur updated");
            history.push("/fournisseur");
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFournisseur();
    }

  React.useEffect(() => {
    getFournisseurByID();
  }, []);

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
                      <Link to="/Fournisseur">Fournisseurs</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit Fournisseur
                    </li>
                  </ol>
                </nav>
              </div>
              <Link
                to="/Fournisseur"
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
              Edit Fournisseur
            </h4>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Row>
              <Col lg="6">
                <h5 className="font-weight-bold pb-3">Card Details</h5>
                <Form className="row g-3" onSubmit={handleSubmit}>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="nom"
                      value={nom}
                      onChange={(e) => {
                        setNom(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="prenom"
                      value={prenom}
                      onChange={(e) => {
                        setPrenom(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <div className="col-md-12 mb-3">
                    <button type="submit" className="btn btn-primary">
                      update Fournisseur
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

export default FournisseurEdit;
