import React from "react";

const CardItem = ({product, addInCart}) => {
  return (
    <div class="card" style={{width: "18rem", margin:"10px"}}>
      <img src={product.mediumImage} class="card-img-top" style={{width: "100%", height: "180px"}} alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.productName}</h5>
        <h5 class="card-title">Price: Rs {product.productPrice}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button class="btn btn-primary"
        onClick={()=>addInCart(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CardItem;
