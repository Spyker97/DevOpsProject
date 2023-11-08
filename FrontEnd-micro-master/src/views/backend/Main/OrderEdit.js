import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { numberFormat } from "highcharts";

const OrderEdit = () => {
    const { id } = useParams();
    const [order, setOrder] = React.useState({});
    const [idProduit, setIdProduit] = React.useState();
    const [idUser, setIdUser] = React.useState();
    const [total, setTotal] = React.useState();
    const history = useHistory();
    

  //get data form api
  const getOrderByID = () => {
    axios.get(`http://localhost:8062/paniers/getPanierById/${id}`).then((response) => {
      setOrder(response.data);
      setIdProduit(response.data.idProduit);
      setIdUser(response.data.idUser);
      setTotal(response.data.total);
    });
    
  };

  //update order axios put request
    const updateOrder = () => {
        
        axios.put(`http://localhost:8062/paniers/updatePanier/${id}`, {
            idUser: idUser,
            idProduit: idProduit,
            total: total,
        }).then(() => {
            alert("order updated");
            history.push("/order");
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOrder();
    }

  
    React.useEffect(() => {
        getOrderByID();
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
                      <Link to="/order">Orders</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit Order
                    </li>
                  </ol>
                </nav>
              </div>
              <Link
                to="/order"
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
              Edit Order
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
                        <Form.Label>Id User</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Id User"
                            value={idUser}
                            disabled
                            onChange={(e) => {
                                setIdUser(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Id Product</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Id Product"
                            value={idProduit}
                            onChange={(e) => {
                                setIdProduit(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Total</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Total"
                            value={total}
                            onChange={(e) => {
                                setTotal(e.target.value);
                            }}
                        />
                    </Form.Group>

                  <div className="col-md-12 mb-3">
                    <button type="submit" className="btn btn-primary">
                      update Order
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

export default OrderEdit;
