import React, { useState, useReducer } from "react";
import ReactDOM, { createPortal } from "react-dom";
import ReactBootstrap, {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Table,
  Button,
  Form,
  FormControl,
  Card,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

const data = [
  {
    id: 1,
    imageSource:
      "https://www.ulcdn.net/images/products/327967/product/Charmer__Floor_Lamp_LP.jpg?1614678120",
    imageTitle: "Charmer Lamp",
    currency: "$",
    priceMin: "100.00",
    priceMax: "130.00",
    imgOverLay: false,
    rating: false,
    sale: false,
  },
  {
    id: 2,
    imageSource:
      "https://www.ulcdn.net/images/products/327960/product/Ori_Table_Lamp_LP.jpg?1614678116",
    imageTitle: "Ori Table Lamp",
    currency: "$",
    priceMin: "80.00",
    priceMax: "60.00",
    imgOverLay: true,
    rating: true,
    sale: true,
  },
  {
    id: 3,
    imageSource:
      "https://www.ulcdn.net/images/products/302919/product/Dwanelle_Pendant_Chrome_LP.jpg?1604163210",
    imageTitle: "Dawnelle Pendant",
    currency: "$",
    priceMin: "50.00",
    priceMax: "30.00",
    imgOverLay: true,
    rating: true,
    sale: true,
  },
  {
    id: 4,
    imageSource:
      "https://www.ulcdn.net/images/products/328032/product/Brook__Study_Lamp_LP.jpg?1614678725",
    imageTitle: "Brook Study Lamp",
    currency: "$",
    priceMin: "80.00",
    priceMax: "100.00",
    imgOverLay: false,
    rating: false,
    sale: false,
  },
  {
    id: 5,
    imageSource:
      "https://www.ulcdn.net/images/products/152993/product/Pashe_Dining_Chair_TL_00_LP.jpg?1502271216",
    imageTitle: "Pashe Chair",
    currency: "$",
    priceMin: "70.00",
    priceMax: "50.00",
    imgOverLay: true,
    rating: true,
    sale: true,
  },
  {
    id: 6,
    imageSource:
      "https://www.ulcdn.net/images/products/163887/product/Capra_Bench_Mahogany_LP.jpg?1517901743",
    imageTitle: "Capra Bench",
    currency: "$",
    priceMin: "50.00",
    priceMax: "60.00",
    imgOverLay: false,
    rating: false,
    sale: false,
  },
  {
    id: 7,
    imageSource:
      "https://www.ulcdn.net/images/products/45465/product/contour_chair_and_ottoman_replica_patchwork_replace_LP.jpg?1569471148",
    imageTitle: "Contour Chair",
    currency: "$",
    priceMin: "250.00",
    priceMax: "200.00",
    imgOverLay: true,
    rating: true,
    sale: true,
  },
  {
    id: 8,
    imageSource:
      "https://www.ulcdn.net/images/products/158123/product/Poulain_Chair_Two_Tone_replace_LP.jpg?1569471511",
    imageTitle: "Poulain Chair",
    currency: "$",
    priceMin: "100.00",
    priceMax: "120.00",
    imgOverLay: false,
    rating: false,
    sale: false,
  },
];

const App = () => {
  const [products, setProducts] = useState(data);

  const [disable, setDisable] = useState({
    inCart: false,
  });
  const [disBtn, setDisBtn] = useState([]);

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.product];
      case "remove":
        const productIndex = state.findIndex(
          (item) => item.name === action.product.name
        );
        if (productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1);
        return update;
      default:
        return state;
    }
  };

  const [cart, setCart] = useReducer(cartReducer, []);

  const add = (product) => {
    setCart({ product, type: "add" });
    setDisable({ ...disable, inCart: true });
    setDisBtn({ ...disBtn, [product.id]: product.id });
    console.log(product);
  };

  const remove = (product) => {
    setCart({ product, type: "remove" });
    delete disBtn[product.id];
  };

  return (
    <>
      {/* Navigation */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            HomeSpace <i className="fas fa-store"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-dark" className="btn" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length}
                </span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}

      <header className="bg-dark1 py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            {/* <h1 className="display-4 fw-bolder">Shop in style</h1> */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.ulcdn.net/media/slideshow/SlideshowTBS.jpg?1626116471"
                  alt="First slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.ulcdn.net/media/slideshow/SlideshowKids.jpg?1626116660"
                  alt="Second slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.ulcdn.net/media/slideshow/Slideshow-DOW-new.jpg?1626939357"
                  alt="Third slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
            </Carousel>
       
          </div>
        </div>
      </header>

      {/* Body Section */}

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => {
              const {
                id,
                imageSource,
                imageTitle,
                currency,
                priceMin,
                priceMax,
              } = product;
              return (
                <div key={id} className="col mb-5">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={imageSource}
                      alt={imageTitle}
                    ></Card.Img>
                    {/* <div> */}
                    {product.imgOverLay ? (
                      <Card.ImgOverlay>
                        <div>
                          <span className="badge1 bg-dark text-white ms-1 rounded-pill">
                            Sale
                          </span>
                        </div>
                      </Card.ImgOverlay>
                    ) : null}

                    {/* </div> */}

                    <Card.Body className="p-4">
                      <Card.Title className="text-center">
                        <h5 className="fw-bolder">{imageTitle}</h5>
                      </Card.Title>
                      <div>
                        {product.rating ? (
                          <Card.Text className="text-center">
                            <span>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </Card.Text>
                        ) : null}
                      </div>
                      <div>
                        {product.sale ? (
                          <Card.Text className="text-center">
                            <strike>
                              {currency}
                              {priceMin}
                            </strike>
                            {currency}
                            {priceMax}
                          </Card.Text>
                        ) : (
                          <Card.Text className="text-center">
                            {currency}
                            {priceMin} - {currency}
                            {priceMax}
                          </Card.Text>
                        )}
                      </div>

                      <Card.Footer className="text-center text-muted">
                        <Button
                          className="cartBtn"
                          disabled={
                            disable.inCart && disBtn[id] === id ? true : false
                          }
                          variant="success"
                          onClick={() => add(product)}
                        >
                          <i className="fas fa-cart-plus"></i>
                        </Button>

                        <Button
                          className="cartBtn"
                          variant="danger"
                          onClick={() => remove(product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-5 bg-dark1">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
