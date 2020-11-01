import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./components/category/category-list";
import Header from "./components/header/header";
import ProductList from "./components/product/product-list";

export default class App extends Component {
	constructor(props) {
		super();

		this.state = {
			currentCategory: "",
			currentCategoryId: 0,
		};
	}

	changeCategory = (category) => {
		this.setState({
			currentCategory: category.categoryName,
			currentCategoryId: category.id,
		});
	};

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
						<CategoryList
							changeCategory={this.changeCategory}
							currentCategoryId={this.state.currentCategoryId}
							info={categoryInfo}
						/>
					</Col>
					<Col xs="9">
						<ProductList
							currentCategoryId={this.state.currentCategoryId}
							currentCategory={this.state.currentCategory}
							info={productInfo}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
