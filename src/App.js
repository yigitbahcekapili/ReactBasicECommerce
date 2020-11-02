import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./components/category/category-list";
import Header from "./components/header/header";
import ProductList from "./components/product/product-list";

export default class App extends Component {
	render() {
		let categoryInfo = {
			title: "Category List",
		};

		let productInfo = {
			title: "Product List",
		};

		return (
			<Container>
				<Header />
				<Row>
					<Col xs="3">
						<CategoryList info={categoryInfo} />
					</Col>
					<Col xs="9">
						<ProductList info={productInfo} />
					</Col>
				</Row>
			</Container>
		);
	}
}
