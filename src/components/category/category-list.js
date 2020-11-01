import React, { Component } from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { API_BASE_URL, API_CONTROLLER } from "../../constants/api-constants";
import { HttpRequestHelper } from "../../helper/http-request";

export default class CategoryList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
		};

		this.categoryApiUrl = API_BASE_URL + API_CONTROLLER.categories;
	}

	componentDidMount() {
		setTimeout(() => {
			this.getCategoryList();
		}, 200);
	}

	getCategoryList() {
		HttpRequestHelper.get(this.categoryApiUrl).then((data) => {
			this.setState({
				categories: data,
			});
		});
	}

	render() {
		return (
			<div>
				<h3>{this.props.info.title}</h3>
				<ListGroup>
					{this.state.categories.length === 0 ? (
						<ListGroupItem>
							<Spinner animation="border" variant="success" />
						</ListGroupItem>
					) : (
						this.state.categories.map((category) => (
							<ListGroupItem
								active={category.id === this.props.currentCategoryId}
								onClick={() => this.props.changeCategory(category)}
								key={category.id}
							>
								{category.categoryName}
							</ListGroupItem>
						))
					)}
				</ListGroup>
			</div>
		);
	}
}
