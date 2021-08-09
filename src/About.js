import react from "react";

import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import ReactBootstrap, { Container, Nav, Carousel } from "react-bootstrap";

const About = () => {
  return (
    <>
      <h2 className="abouth2">
        Shop For The Best Furniture Online For Your Home
      </h2>

      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white aboutC">
          <Carousel>
            <Carousel.Item>
              <img
                src="https://www.ulcdn.net/images/products/339157/product/Malabar_Bookshelf_Display_Cabinet_55-book_capacity_Amber_Walnut_Finish_LP.jpg?1623677125"
                alt="First slide"
                width="300px"
                height="350px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.ulcdn.net/images/products/327425/product/Monet_mirror_LP.jpg?1614599961"
                alt="Second slide"
                width="300px"
                height="350px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.ulcdn.net/images/products/146842/product/Diner_Dining_Bench_GO_00_replace_LP.jpg?1571729276"
                alt="Third slide"
                width="300px"
                height="350px"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="aboutDiv">
        <p className="aboutP">
          Furniture is amongst the most crucial elements of a home and more
          often than not a true reflection of the people living in it. From the
          style of bed to the colour of the chairs, every little detail makes a
          massive impact, which is why choosing the right furniture for your
          home is essential. Tired of searching for furniture shop near me in
          the search engine of your choice and not finding substantial results?
          We have just the solution for you.
        </p>

        <p className="aboutP">
          HomeSpace, an online furniture store, is home to exceptional furniture
          options for every part of your home including the bedroom, living
          room, dining room, and more. Trust HomeSpace with your home furniture
          needs and enjoy access to premium furniture made from the highest
          quality materials. When you shop for furniture online from HomeSpace,
          you’re assured of a durable product that’ll add immense value to your
          interior decor.
        </p>
      </div>
    </>
  );
};

export default About;
