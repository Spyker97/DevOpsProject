import React, { useEffect, useState } from 'react';

import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import axios from "axios";
import {Link, useHistory} from 'react-router-dom'
import Card from '../../../../components/Card';


export default function Product() {
   const [product, setProduct] = useState([]);
   const history = useHistory();
//    const fetchproducts= async (e) => {
//     try{
//         const response = await axios.get("http://localhost:8089/products/retrieveProduits");
//         console.log("------",response.data);
//         setProduct(response.data);

//     } catch(err){
//         console.error(err);
//     }

//    };

   async function fetchproducts() {
fetch('http://192.168.1.117:8089/api/instructor/all').then(data => data.json()).then (data => setProduct(data))
   }
  
   const deleteProduct = async (id) => {
    axios.delete("http://192.168.1.117:8089/api/instructor/" + id);
    window.location.reload(false);
    
  }; 
   useEffect(() => {
    fetchproducts();
    
   }, [])
  return (
    <>
    <Container fluid>
        <Row>
            
            <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                   <div className="d-flex align-items-center justify-content-between">
                        <h4 className="font-weight-bold">Product</h4>
                    </div>  
                    <div className="create-workform">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="modal-product-search d-flex">
                                <Form className="mr-3 position-relative">
                                    <div className="form-group mb-0">
                                    <Form.Control type="text" className="form-control" id="exampleInputText"  placeholder="Search Product"/>
                                    <Link className="search-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link>
                                    </div>
                                </Form>
                                <Link to="/product-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Product
                                </Link>
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <Row>
                <Col lg="12">
                        <Card className="card-block card-stretch">
                            <Card.Body className="p-0">
                            <div className="d-flex justify-content-between align-items-center p-3">
                                    <h5 className="font-weight-bold">Products List</h5>
                                    <Button variant="btn btn-secondary btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Export
                                    </Button>
                            </div>
                            <div className="table-responsive">
                                    <table className="table data-table mb-0">
                                        <thead className="table-color-heading">
                                            <tr className="text-light">
                                                <th scope="col">
                                                    <label className="text-muted m-0" >Product Name</label>
                                                    {/* <input type="text" className="form-control mt-2" id="text1" aria-describedby="textHelp" placeholder="Search Product">  */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Category</label>
                                           
                                                </th>
                                                <th scope="col" className="text-right">
                                                    <label className="text-muted mb-0" >Price</label>
                                                     {/* <input type="text" className="form-control mt-2" id="text2" aria-describedby="textHelp" placeholder="Price">  */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Quantity</label>
                                                     {/* <input type="text" className="form-control mt-2" id="text3" aria-describedby="textHelp" placeholder="Quantity"> */}
                                                </th>
                                                <th scope="col">
                                                    <label className="text-muted mb-0" >Description</label>
                                                     
                                                </th>
                                                <th scope="col" className="text-right">
                                                    <span className="text-muted" >Action</span>
                                                    {/* <p className="text-muted"></p>  */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {product?.map((item, i) =>
                                                                              
                                        <tr key={item.numInstructor} className="white-space-no-wrap">
                                        <td className="">
                                            <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                <div className="h-avatar is-medium">
                                                
                                                    <div className="data-content">
                                                    <div>
                                                    <span className="font-weight-bold">{item.firstName}</span>     
                                                    </div>
                                                    </div>
                                                </div>
                                                {/* <div className="data-content">
                                                    <div>
                                                    <span className="font-weight-bold">{item.Pname}</span>                           
                                                    </div>
                                                    <p className="m-0 mt-1">
                                                    {item.des}
                                                    </p>
                                                </div> */}
                                            </div>
                                        </td>
                                        
                                        <td className="text-right">
                                            {item.lastName}
                                        </td>
                                        <td>
                                          {item.dateOfHire}
                                        </td>
                                        <td>
                                       
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                              
                                                    <Link to={`/product-edit/${item?.numInstructor}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} >
                                                    <Link    onClick={() =>
                                                 deleteProduct(item?.id)
                                                        }>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </Link>
                                                </OverlayTrigger>
                                            </div>
                                        </td>
                                    </tr> 
                                        )}

                                          
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                </Col>
                </Row>
            </Col>
        </Row>
    </Container>

    
    </>
  );
}
