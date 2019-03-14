import styled from "styled-components";

const Container = styled.div``;

const Contain = styled.div`
  margin: 50px;
  padding: 40px 80px;
  box-shadow: 2px 2px 13px #ccc;
`;

const BorderContain = styled.span`
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  background: linear-gradient(-90deg, #a1a1ff, #00b2f1);
  left: 0;
  top: 0;
`;

const NumberTitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background: #00b2f1;
  padding: 8px 20px;
  border-radius: 100px;
  color: #fff;
  font-size: 35px;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #262626;
  margin: 40px 0;
  font-size: 35px;
`;

const Product = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 10px 0;
  box-shadow: 2px 2px 13px #ccc;
  margin-bottom: 20px;
`;

const ProductImageContain = styled.div``;

const ProductImage = styled.img``;

const ProductInformationContain = styled.div`
  display: grid;
  align-content: center;
`;

const ProductTitle = styled.h5`
  line-height: 30px;
  font-weight: 500;
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

const ProductPrice = styled.span`
  display: grid;
  align-content: center;
  font-weight: bold;
  font-size: 18px;
`;

const CartMutedText = styled.span`
  color: #a7a7a7;
  font-size: 16px;
`;

const CartTotalTextPrice = styled.span`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

const CartPriceContain = styled.div``;
const CartPriceText = styled.div``;

export {
  Container,
  Contain,
  BorderContain,
  NumberTitle,
  Title,
  Product,
  ProductInformationContain,
  ProductImageContain,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  CartPriceContain,
  CartMutedText,
  CartTotalTextPrice,
  CartPriceText
};
