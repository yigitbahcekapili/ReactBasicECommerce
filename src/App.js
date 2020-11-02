import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./components/category/category_list";
import Header from "./components/header/header";
import ProductList from "./components/product/product_list";

export default class App extends Component {
	render() {
		let categoryInfo = {
			title: "Kategori Listesi",
		};

		let productInfo = {
			title: "Ürün Listesi",
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
