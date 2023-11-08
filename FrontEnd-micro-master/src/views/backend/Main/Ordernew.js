import  React from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link,  useHistory} from 'react-router-dom'
import axios from 'axios'





const Ordernew =()=>{
    //get data form
    const [idProduct,setIdProduct]=React.useState('')
    const [idUser,setIdUser]=React.useState('')
    const [total,setTotal]=React.useState('')
    const history=useHistory()
    

    // add order axios post request
    const addOrder =()=>{
        console.log(idProduct,idUser,total)
        axios.post('http://localhost:8062/paniers/createPanier',{
            idUser:idUser,
            idProduit:idProduct,
            total:total
        }).then(()=>{
            alert('order added')
            history.push('/order')
        })
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        addOrder()
    }


    return(
        <>
       <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/order">Orders</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Order</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/order" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">New Order</h4>
            </Col>            
        </Row>
        <Card>
            <Card.Body>
                <Row>
                    <Col lg="6">
                        <h5 className="font-weight-bold pb-3">Card Details</h5>
                        <Form className="row g-3" onSubmit={ handleSubmit }>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text1" className="form-label font-weight-bold text-muted text-uppercase">Customer</Form.Label>
                                <Form.Control type="text" className="form-control" id="idUser" placeholder="id Customer" onChange={(e) => {
                                    setIdUser(e.target.value)
                                }} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text2" className="form-label font-weight-bold text-muted text-uppercase">id product</Form.Label>
                                <Form.Control type="text" className="form-control" id="idProduit" placeholder="id produit" onChange={(e) =>{
                                    setIdProduct(e.target.value)
                                }} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Label htmlFor="Text3" className="form-label font-weight-bold text-muted text-uppercase">Total</Form.Label>
                                <Form.Control type="text" className="form-control" id="total" placeholder="total" onChange={(e) => {
                                    setTotal(e.target.value)
                                }} />
                            </div>
                            <div className="col-md-12 mb-3">
                                <button type="submit" className="btn btn-primary" >Add Order</button>
                            </div>
                        </Form>
                    </Col>
                    <Col lg="6">
                        
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    </Container>
        </>
    )
}

export default Ordernew;