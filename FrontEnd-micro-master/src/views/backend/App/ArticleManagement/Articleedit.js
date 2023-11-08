import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../../components/Card";
import { Link, useParams } from "react-router-dom";
// img
import user1 from "../../../../assets/images/user/1.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Articleedit = () => {
  const [articles, setArticles] = useState(null);
  const { id } = useParams();

  const history = useHistory();

  const [formData, setFormData] = useState({
    idArticle: "",
    titre: "",
    contenu: "",
    auteur: "",
    image: "",
    datePublication: new Date(),
  });

  async function fetchArticle() {
    axios
      .get(`http://localhost:8089/articles/getarticleById/` + id, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
        setFormData({
          idArticle: res.data.idArticle,
          titre: res.data.titre,
          contenu: res.data.contenu,
          auteur: res.data.auteur,
          image: res.data.image,
          datePublication: res.data.datePublication,
        });
      });
  }

  useEffect(() => {
    fetchArticle();
    console.log(id);
  }, [id]);

  const { titre, contenu, auteur, image, datePublication } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    axios.put("http://localhost:8089/articles/update-Article/" + id, formData);
    history.push("/article");
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
                    <li className="breadcrumb-item">
                      <Link to="/Article">Articles</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit Article
                    </li>
                  </ol>
                </nav>
              </div>
              <Link
                to="/Article"
                className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2"
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
              Edit Article
            </h4>
          </Col>
          <Col lg="12">
            <Card>
              <Card.Body>
                <Row>
                  <Col md="3" className="mb-3">
                    <Card.Body className="rounded bg-light">
                      <div className="d-flex justify-content-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" height="80px" x="0px" y="0px" viewBox="0 0 419.2 419.2" style="enable-background:new 0 0 419.2 419.2;" xml:space="preserve" stroke="currentColor">
                                            <g>
                                                <g>
                                                    <g>
                                                        <circle cx="158" cy="144.4" r="28.8"/>
                                                        <path d="M394.4,250.4c-13.6-12.8-30.8-21.2-49.6-23.6V80.4c0-15.6-6.4-29.6-16.4-40C318,30,304,24,288.4,24h-232     c-15.6,0-29.6,6.4-40,16.4C6,50.8,0,64.8,0,80.4v184.4V282v37.2c0,15.6,6.4,29.6,16.4,40c10.4,10.4,24.4,16.4,40,16.4h224.4     c14.8,12,33.2,19.6,53.6,19.6c23.6,0,44.8-9.6,60-24.8c15.2-15.2,24.8-36.4,24.8-60C419.2,286.8,409.6,265.6,394.4,250.4z      M21.2,80.4c0-9.6,4-18.4,10.4-24.4c6.4-6.4,15.2-10.4,24.8-10.4h232c9.6,0,18.4,4,24.8,10.4c6.4,6.4,10.4,15.2,10.4,24.8v124.8     l-59.2-59.2c-4-4-10.8-4.4-15.2,0L160,236l-60.4-60.8c-4-4-10.8-4.4-15.2,0l-63.2,64V80.4z M56,355.2v-0.8     c-9.6,0-18.4-4-24.8-10.4c-6-6.4-10-15.2-10-24.8V282v-12.4L92,198.4l60.4,60.4c4,4,10.8,4,15.2,0l89.2-89.6l58.4,58.8     c-1.2,0.4-2.4,0.8-3.6,1.2c-1.6,0.4-3.2,0.8-5.2,1.6c-1.6,0.4-3.2,1.2-4.8,1.6c-1.2,0.4-2,0.8-3.2,1.6c-1.6,0.8-2.8,1.2-4,2     c-2,1.2-4,2.4-6,3.6c-1.2,0.8-2,1.2-3.2,2c-0.8,0.4-1.2,0.8-2,1.2c-3.6,2.4-6.8,5.2-9.6,8.4c-15.2,15.2-24.8,36.4-24.8,60     c0,6,0.8,11.6,2,17.6c0.4,1.6,0.8,2.8,1.2,4.4c1.2,4,2.4,8,4,12v0.4c1.6,3.2,3.2,6.8,5.2,9.6H56z M378.8,355.2     c-11.6,11.6-27.2,18.4-44.8,18.4c-16.8,0-32.4-6.8-43.6-17.6c-1.6-1.6-3.2-3.6-4.8-5.2c-1.2-1.2-2.4-2.8-3.6-4     c-1.6-2-2.8-4.4-4-6.8c-0.8-1.6-1.6-2.8-2.4-4.4c-0.8-2-1.6-4.4-2-6.8c-0.4-1.6-1.2-3.6-1.6-5.2c-0.8-4-1.2-8.4-1.2-12.8     c0-17.6,7.2-33.2,18.4-44.8c11.2-11.6,27.2-18.4,44.8-18.4s33.2,7.2,44.8,18.4c11.6,11.6,18.4,27.2,18.4,44.8     C397.2,328,390,343.6,378.8,355.2z"/>
                                                        <path d="M341.6,267.6c-0.8-0.8-2-1.6-3.6-2.4c-1.2-0.4-2.4-0.8-3.6-0.8c-0.4,0-0.4,0-0.4,0c-0.4,0-0.4,0-0.4,0     c-1.2,0-2.4,0.4-3.6,0.8c-1.2,0.4-2.4,1.2-3.6,2.4l-24.8,24.8c-4,4-4,10.8,0,15.2c4,4,10.8,4,15.2,0l6.4-6.4v44     c0,6,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8v-44l6.4,6.4c4,4,10.8,4,15.2,0c4-4,4-10.8,0-15.2L341.6,267.6z"/>
                                                    </g>
                                                </g>
                                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                        </svg> */}

                        <img src={user1} className="img-fluid" alt="profile" />
                      </div>
                      <div className="d-flex justify-content-center mt-2 mb-3">
                        <p className="mb-0 text-muted font-weight-bold">
                          Upload Image
                        </p>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col md="9">
                    <form
                      className="row g-3 date-icon-set-modal"
                      onSubmit={onSubmit}
                    >
                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text1"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Titre
                        </Form.Label>

                        <Form.Control
                          type="text"
                          id="Text1"
                          placeholder="Enter Titre "
                          name="titre"
                          value={titre}
                          onChange={(e) => onChange(e)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text3"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Auteur
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="Text3"
                          placeholder="Enter Auteur Name"
                          name="auteur"
                          value={auteur}
                          onChange={(e) => onChange(e)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text2"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Contenu
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="Text2"
                          placeholder="Enter Contenu"
                          rows="3"
                          as="textarea"
                          name="contenu"
                          value={contenu}
                          onChange={(e) => onChange(e)}
                        />
                      </div>

                      <div className="d-flex align-items-end ">
                        <Button variant="btn btn-primary" type="submit">
                          Update Article
                        </Button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Articleedit;
