import React from 'react'
import { Container,Col,Row,Form,Button } from 'react-bootstrap'
import  Card from '../../../components/Card'
import {connect} from "react-redux";
import {getDarkMode} from '../../../store/mode'
//router
import { useHistory } from 'react-router-dom'


//img
import logo from '../../../assets/images/logo.png'
import darklogo from '../../../assets/images/logo-dark.png'

function mapStateToProps(state) {
   return {
       darkMode: getDarkMode(state)
   };
}
const LockScreen = (props) => {
    let history =useHistory()
    return (
        <>
        <section className="login-content">
         <Container className="h-100">
            <Row className="align-items-center justify-content-center h-100">
               <Col md="5">
                  <Card>
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col lg="12">
                              <div className="auth-logo">
                              <img src={logo} className={`img-fluid  rounded-normal  ${!props.darkMode ? 'd-none' : ''}`} alt="logo"/>
                           <img src={darklogo} className={`img-fluid  rounded-normal  ${props.darkMode ? 'd-none' : ''}`} alt="logo"/>
                              </div>
                              <div className="text-center">
                                 <h2 className="mb-2">Hi ! Barry Tech</h2>
                                 <p>Enter your password to access the admin.</p>
                              </div>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group>
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control  className="form-control" type="password" placeholder="********"/>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <Button type="submit" onClick={() => history.push('/')} variant="btn btn-primary btn-block">Login</Button>
                              </Form>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </section>
        </>
    )
}


export default connect(mapStateToProps)(LockScreen)