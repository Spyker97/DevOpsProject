import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import { Container ,Row, Col,Table,OverlayTrigger,Tooltip,Dropdown } from 'react-bootstrap'
import  Card from '../../../../components/Card'




// img
import axios from "axios";

//img
import user1 from '../../../../assets/images/user/1.jpg'
import user2 from  '../../../../assets/images/user/2.jpg'
import user3 from '../../../../assets/images/user/3.jpg'
import user4 from '../../../../assets/images/user/4.jpg'
import user5 from '../../../../assets/images/user/5.jpg'
import user6 from  '../../../../assets/images/user/6.jpg'
import user7 from '../../../../assets/images/user/1.jpg'




const User = () => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    async function fetchData() {
        console.log("aaaaaaa");
    fetch('http://localhost:5000/api/users/').then(data => data.json()).then (data => setUser(data))
    console.log(user)
       }
      useEffect(() => {
        fetchData();
      }, []);
    
    
      const deleteUser = async(id)=>{
        axios.delete('http://localhost:5000/api/users/deleteUser/'+id)
       // const notify = () => toast("Commande deleted !");
      }
    return (
        <>
          <Container fluid>
            <Row>
                <Col lg="12">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title mb-0">User List</h4>
                            </Card.Header.Title>
                            <Link to="#" className="btn btn-primary" data-toggle="modal" data-target="#addContact">Add New</Link>
                        </Card.Header>
                        <Card.Body>
                            <Table className="data-tables" responsive style={{width:"100%" }}>
                                <thead className="light">
                                    <tr>
                                        <th></th>
                                        <th>username</th>
                                        <th>firstName</th>
                                        <th>lastName</th>
                                        <th>email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {user?.map((item) => (
                                    <tr>
                                        <td>
                                            <img src={user1} className="rounded avatar-40 img-fluid" alt="user1" />
                                        </td>
                                        <td>{item.username}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <div className="d-flex align-items-center list-action">
                                                <OverlayTrigger placement={"top"} overlay={<Tooltip>Rating</Tooltip>}>
                                                        <Link to="/" onClick={(e) => e.preventDefault()}   className="badge bg-warning-light mr-2"><i className="far fa-star"></i></Link>
                                                </OverlayTrigger>
                                                
                                                <OverlayTrigger placement={"top"} overlay={<Tooltip>View</Tooltip>}>
                                                    <Link to="/" onClick={(e) => e.preventDefault()} className="badge bg-success-light mr-2"><i className="lar la-eye"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement={"top"} overlay={<Tooltip>Action</Tooltip>}>
                                                    <span className="badge bg-primary-light"  data-original-title="Action">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='span' className="text-primary action-item" />
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item onClick={() =>deleteUser(item._id)} >Delete</Dropdown.Item>
                                                                <Dropdown.Item href="#">Hide from Contacts</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </span>
                                                </OverlayTrigger>
                                            </div>
                                        </td>
                                    </tr>
                                ))};
                                </tbody>
                                </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default User;