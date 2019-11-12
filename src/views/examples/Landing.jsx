
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import CardsFooter from "components/Footers/CardsFooter.jsx";
//import Background from '../../assets/img/img/back.jpg';
import  '../../assets/css/general.css';

// index page sections
import Download from "../IndexSections/Download.jsx";

var sectionStyle = {
  width: "85%"
};

var sectionStyle2 = {
  width: "75%"
};

var sectionStyle3 = {
  width: "50%"
};

var sectionStyle4 = {
  width: "90%"
};

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg img-home pb-250"  >
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        I'm Daniel Matuz {" "}
                        <span>#Software #Fotografía #Música</span>
                      </h1>
                      <p className="lead text-white">
                        Soy estudiante de desarrollo de software, fotográfico amateur
                        de tipo #landscape y compositor músical orquestal, también soy
                        gamer ocasional
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-code" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Desarrollo de software
                          </h6>
                          <p className="description mt-3">
                            Como estudiante en el área de desarrollo de software,
                            mis desafíos del día a día, son mi motor de aprendizaje,
                            con 1 año de experiencia, la pasión ha crecido.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Software
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Estudiante
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              #UPchiapas
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-photo" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            FOTOGRAFÍA #LANDSCAPE
                          </h6>
                          <p className="description mt-3">
                            3 años de experiencia en la fotografía de paisajes,
                            como pasatiempo, me gusta poder fusionar ideas para
                            crear nuevos conceptos de arte.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Fotografía
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Creatividad
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Pasatiempo
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-gamepad" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Música & videojuegos
                          </h6>
                          <p className="description mt-3">
                            Composición de música orquestal para distintos
                            proyectos, así como jugador habil para videojuegos competitivos,
                            son pasatiempos que aprovecho para relajarse
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="title-box text-center">
          <h1 id="experiencia" className="title-a">
            E X P E R I E N C I A
          </h1>
          <p className="subtitle-a">
            Mis participaciones en eventos de clase total
          </p>
          <div className="line-mf"></div>
        </div>

          <section className="section mod-section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>

                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-code" />
                    </div>
                    <h3>Desarrollo de software</h3>
                    <p>
                      Como estudiante en Desarrollo de software,
                      los desafíos y proyectos de gran escala
                      son mi pasión, llevo 1 año de aprendizaje en esta área
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              3 Proyectos de software realizados
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Dominio en curso WEB</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-app" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Experimentado en Java
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/back.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Amante de la Fotografía
                      </h4>
                      <p className="lead text-italic text-white">
                        La experiencia en la fotografía #landscape es bastante amplia,
                        aunque bastante amateur, he colaborado en distintos foros como
                        Travel Network y NTG.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="fa fa-photo" />
                    </div>
                    <h3>De pixeles a la vida</h3>
                    <p className="lead">
                      Mi trabajo en la fotografía no es nada profesional,
                      junto mis habilidades de software, junto con las de
                      componer música y fotografía para crear nuevos conceptos
                    </p>
                    <p>
                      Los limites de la imaginación los plasmo en forma de diseño,
                      soy una persona bastante juiciosa si de diseño se trata,
                      juzgo la forma en como se ve, ya que eso hace sentirme.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gray-dark">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 id="educacion" className="display-3 text-white">E D U C A C I Ó N</h4>
                      <p className="text-white">
                        Las étapas más importantes de la educación
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Colegio de Bachilleres de Chiapas
                          </h5>
                          <div className="work-img">
                            <img src={require("assets/img/theme/COBACH.png")} alt="" className="img-fluid"></img>
                          </div>
                          <p>
                            En el plante 01, ingrese en agosto del año 2015, y egrese
                            en Julio del año 2018 con honores
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Universidad Politécnica de Chiapas
                          </h5>
                          <div className="work-img">
                            <img src={require("assets/img/theme/UP.png")} alt="" className="img-fluid"></img>
                          </div>
                          <p>
                            Ingrese en el año 2018, durante el mes de septiembre, fecha aproximada
                            de graduación: agosto 2021
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 id="proyectos" className="display-3">P R O Y E C T O S</h2>
                  <p className="lead text-muted">
                    Proyectos elaborados con formalidad y profesionalismo en el mundo del software
                  </p>
                </Col>
              </Row>
              <Row>

                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="blog-single.html"><img src={require("assets/img/theme/enorm.png")} alt="" className="img-fluid"></img></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h6 className="category">SOFTWARE</h6>
                        </div>
                      </div>
                      <h3 className="card-title"><a href="blog-single.html">ENORM  -V | Punto de venta </a></h3>
                      <p className="card-description">
                        Sistema integrado de multiples funcionalidades para administrar y
                        poder gestionar las ventas de cualquier comercio con conexión a la RED </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="blog-single.html"><img src={require("assets/img/theme/gardenlife.png")} alt="" className="img-fluid"></img></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h6 className="category">SOFTWARE</h6>
                        </div>
                      </div>
                      <h3 className="card-title"><a href="blog-single.html">GardenLife |Admin vivero</a></h3>
                      <p className="card-description">
                        Sistema de administración de productos, calendario, registros en un conjunto de herramientas
                        para viveros o sectores a fines&nbsp; de forma sencilla </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="blog-single.html"><img src={require("assets/img/theme/adline.png")} alt="" className="img-fluid"></img></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h6 className="category">SOFTWARE</h6>
                        </div>
                      </div>
                      <h3 className="card-title"><a href="blog-single.html">AdLine | Administrar vuelos  </a></h3>
                      <p className="card-description">
                        Suite de herramientaspara administrar vuelos y flota de aerolineas
                        básica con recursos de exportación de datos y gestión global

                      </p>
                    </div>
                  </div>
                </div>

              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 id="habilidades" className="display-3 text-white">Mejores habilidades</h2>
                  <p className="lead text-white">
                    Las mejores habilidades son subjetivas, abro la carta de presentación de quien
                    en verdad soy, y lo que mejor hago en el área de software, mi actividad principal, y
                    la fotografía
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-code text-primary" />
                  </div>
                  <h5 className="text-white mt-3">S O F T W A R E</h5>

                  <div className="skill-mf">
                    <p className="title-s text-white">Habilidades en software</p>
                    <span className="text-white">Java</span> <span className="pull-right text-white">85%</span>
                    <div className="progress text-white">
                      <div className="progress-bar text-white" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">HTML</span> <span className="pull-right text-white">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">C++</span> <span className="pull-right text-white">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">JavaScript</span> <span className="pull-right text-white">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>

                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-photo text-primary" />
                  </div>
                  <h5 className="text-white mt-3">F O T O G R A F Í A</h5>


                  <div className="skill-mf">
                    <p className="title-s text-white">Habilidades en fotografía</p>
                    <span className="text-white">Nocturna</span> <span className="pull-right text-white">66%</span>
                    <div className="progress text-white">
                      <div className="progress-bar text-white" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">Paisaje</span> <span className="pull-right text-white">93%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '93%'}} aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">Retrato</span> <span className="pull-right text-white">71%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '71%'}} aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">TimeLapsed</span> <span className="pull-right text-white">82%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '82%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>


                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">M Ú S I C A</h5>


                  <div className="skill-mf">
                    <p className="title-s text-white">Habilidades en arte auditivo</p>
                    <span className="text-white">Orquestal</span> <span className="pull-right text-white">96%</span>
                    <div className="progress text-white">
                      <div className="progress-bar text-white" role="progressbar" style={{width: '96%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">Chillout</span> <span className="pull-right text-white">88%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">Trap</span> <span className="pull-right text-white">59%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '59%'}} aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="text-white">Ambiente</span> <span className="pull-right text-white">77%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '77%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>


                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section id="contacto" className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">¿Algo más que quieras saber de mi?</h4>
                      <p className="mt-0">
                        Tus opiniones son importantes, charlemos
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Tu nombre"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Correo electrónico"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Escribe tu mensaje"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Enviar mensaje
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
