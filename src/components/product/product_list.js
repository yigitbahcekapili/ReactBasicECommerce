import React, { Component } from "react";
import { Badge, Table } from "reactstrap";
import { API_BASE_URL, API_CONTROLLER } from "../../constants/api_constants";
import { HttpRequestHelper } from "../../helper/http_request";
import { connect } from "react-redux";

class ProductList extends Component {
	constructor(props) {
		super();

		this.state = {
			products: [],
			inputText: "",
		};

		this.productApiUrl = API_BASE_URL + API_CONTROLLER.products;
	}

	componentDidMount() {
		this.getProductList();
	}

	getProductList() {
		HttpRequestHelper.get(this.productApiUrl).then((data) => {
			this.setState({
				products: data,
			});
		});
	}

	getProductItemForRender() {
		let itemIndex = 1;

		var items = this.state.products.map(
			(product) =>
				product.categoryId === this.props.currentCategoryId && (
					<tr key={product.id}>
						<th scope="row">{itemIndex++}</th>
						<td>{product.productName}</td>
						<td>{product.unitPrice}</td>
						<td>{product.unitsInStock}</td>
					</tr>
				)
		);

		return items;
	}

	render() {
		return (
			<div>
				<h3>
					{this.props.info.title} -{" "}
					<Badge color="warning">{this.props.currentCategoryName}</Badge>
				</h3>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Ürün Adı</th>
							<th>Fiyat</th>
							<th>Stok Adeti</th>
						</tr>
					</thead>
					<tbody>{this.getProductItemForRender()}</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentCategoryId: state.currentCategoryId,
		currentCategoryName: state.currentCategoryName,
	};
};

export default connect(mapStateToProps)(ProductList);
