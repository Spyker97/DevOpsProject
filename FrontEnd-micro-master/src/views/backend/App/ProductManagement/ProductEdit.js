import  React, { useEffect, useState } from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import Card from '../../../../components/Card';
import {Link, useHistory} from 'react-router-dom'
import axios from "axios";

import { useParams } from 'react-router-dom';

export default function ProductEdit() {
    const {id}=useParams();
    const [product, setProduct] = useState()
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [description, setDescription] = useState('');
    const [LocalDate, setLocalDate] = useState('');
    const [availability, setAvailability] = useState('');
    const history = useHistory();
    const [loadProd,setLoadProd]=useState('');

    let handleNameChange = (e) => {
        console.log(e.target.value);
        setfirstName(e.target.value)

    }
    let handleDescripChange = (e) =>{
        setDescription(e.target.value)

    }
    let handlelastNameChange = (e) => {
        setlastName(e.target.value)

    }
   
    let handleAvailabilityChange = (e) => {
        setAvailability(e.target.value)

    }
    let handleLocalDateChange = (e) => {
        setLocalDate(e.target.value)

    } 

    async function getdataProduct() {
        axios
          .get(`http://192.168.1.117:8089/api/instructor/get/` + id, {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then((res) => {
            console.log(res.data);
            setfirstName(res.data.firstName)
            setlastName(res.data.lastName)
            setDescription(res.data.description)
            setLocalDate(res.data.LocalDate)
            setAvailability(res.data.availability)
         
          
          });
      }
    useEffect(() => {
        getdataProduct();
        setLoadProd('done!');
      
    }, [id])

    const onSubmit = async (e) => {
        axios.put("http://192.168.1.117:8089/api/instructor/update" + id,
        {
            firstName:firstName,
            lastName:lastName,
            LocalDate:LocalDate,
            
        });
        history.push("/product");
      };
  return (
    <>
      <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/product">Products</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/product" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">New Product</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <h5 className="font-weight-bold mb-3">Basic Information</h5>
                        <Form className="row g-3"   >
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="inputState"
                                 className="form-label font-weight-bold text-muted text-uppercase"
                                >Product Name</Form.Label>
                                <input type="text"
                                 className="form-control"
                                 id="firstName"
                                 name='firstName'
                                 value={firstName}

                                 onChange={handleNameChange}
                                 />
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="inputState"
                                 className="form-label font-weight-bold text-muted text-uppercase"
                            
                                 >LocalDate</Form.Label>
                                  <Form.Control type="text" 
                                  className="form-control"
                                   id="LocalDate"
                                   name='LocalDate'
                                   value={LocalDate}
                                   onChange={handleLocalDateChange}
                                    />

                                {/* <select id="inputState" className="form-select form-control choicesjs">
                                    <option value="selected">Select LocalDate</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Applications">Applications</option>
                                    <option value="Gadgets">Gadgets</option>
                                </select> */}
                            </div>
                          
                         
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="Text6"
                                 className="form-label font-weight-bold text-muted text-uppercase"
                               
                                 >lastName</Form.Label>
                                <Form.Control type="text"
                                 className="form-control"
                                  id="lastName" 
                                  name='lastName'
                                  value={lastName}
                                  onChange={handlelastNameChange}/>
                            </div>
                        
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                     
                        <div className="d-flex justify-content-end mt-3">
                            <Button variant="btn btn-primary" onClick={onSubmit}>
                                update Product
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
    </>
  );
}
