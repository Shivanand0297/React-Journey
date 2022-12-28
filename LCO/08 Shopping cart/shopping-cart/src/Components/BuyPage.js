import { useState, useEffect } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { Container, Row, Col, Button } from "reactstrap";
import CardItem from "./CardItem";

const API_KEY = "563492ad6f91700001000001b4c1051efa134b2e9311ca24a5232e61"; //pixal api key
const query = "laptop";
let page = 2;
console.log(page);

let url = `https://api.pexels.com/v1/search?query=${query}&per_page=6&page=${page}`;

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    console.log(url);
    const { data } = await axios.get(url, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = data;

    const allProducts = photos.map((photo) => ({
      mediumImage: photo.src?.medium,
      tinyImage: photo.src?.tiny,
      productName: faker.word.noun(),
      productPrice: faker.finance.amount(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProducts);
    console.log(allProducts);
  };

  const handleNextPage = () => {
    page = page + 1;
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
      <Button color="warning" onClick={handleNextPage}>
        Next Page
      </Button>
    </Container>
  );
};

export default BuyPage;
