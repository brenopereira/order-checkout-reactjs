import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Contain,
  BorderContain,
  NumberTitle,
  Title,
  Product,
  ProductImageContain,
  ProductImage,
  ProductInformationContain,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  CartPriceContain,
  CartMutedText,
  CartPriceText,
  CartTotalTextPrice
} from "./style";

const Cart = props => {
  return (
    <Container className="container">
      <Contain className="col-md-12">
        <BorderContain />
        <Title>
          <NumberTitle>2</NumberTitle> Order Summary
        </Title>
        <Product className="row">
          <ProductImageContain className="col-lg-3">
            <ProductImage
              src={require("../../assets/product-headphone.png")}
              alt=""
              className="img-fluid"
            />
          </ProductImageContain>
          <ProductInformationContain className="col-lg-6">
            <ProductTitle>
              Base QuietComfort 35 Wireless Noise Cancelling HEadphones (Black)
              B&H
            </ProductTitle>
            <ProductDescription>#BOQC35WB MFR # 759944-0010</ProductDescription>
          </ProductInformationContain>
          <ProductPrice className="col-lg-3">$ 3,000.00</ProductPrice>
        </Product>
        <Product className="row">
          <ProductImageContain className="col-lg-3">
            <ProductImage
              src={require("../../assets/product-macbook.png")}
              alt=""
              className="img-fluid"
            />
          </ProductImageContain>
          <ProductInformationContain className="col-lg-6">
            <ProductTitle>
              Base QuietComfort 35 Wireless Noise Cancelling HEadphones (Black)
              B&H
            </ProductTitle>
            <ProductDescription>#BOQC35WB MFR # 759944-0010</ProductDescription>
          </ProductInformationContain>
          <ProductPrice className="col-lg-3">$ 3,000.00</ProductPrice>
        </Product>
        <CartPriceContain className="row">
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>Cart Subtotal</CartMutedText>
          </CartPriceText>
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>$415.49</CartMutedText>
          </CartPriceText>
        </CartPriceContain>
        <CartPriceContain className="row">
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>Tax</CartMutedText>
          </CartPriceText>
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>$30.15</CartMutedText>
          </CartPriceText>
        </CartPriceContain>
        <CartPriceContain className="row">
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>Shipping & Handling</CartMutedText>
          </CartPriceText>
          <CartPriceText className="col-md-6 text-right">
            <CartMutedText>Free</CartMutedText>
          </CartPriceText>
        </CartPriceContain>
        <CartPriceContain className="row">
          <CartPriceText className="col-md-6 text-right">
            <CartTotalTextPrice>Total</CartTotalTextPrice>
          </CartPriceText>
          <CartPriceText className="col-md-6 text-right">
            <CartTotalTextPrice>$445.61</CartTotalTextPrice>
          </CartPriceText>
        </CartPriceContain>
      </Contain>
    </Container>
  );
};

export default connect(state => ({}))(Cart);
