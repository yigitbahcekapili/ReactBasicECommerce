import React, { Component } from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { HttpRequestHelper } from "../../helper/http_request";
import { API_BASE_URL, API_CONTROLLER } from "../../constants/api_constants";
import { changeCategory } from "../../store/actions/category_actions";

class CategoryList extends Component {
	constructor(props) {
		super();

		this.state = {
			categoryList: [],
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
			this.setState({ categoryList: data });
		});
	}

	render() {
		return (
			<div>
				<h3>{this.props.info.title}</h3>
				<ListGroup>
					{this.state.categoryList.length === 0 ? (
						<ListGroupItem>
							<Spinner animation="border" variant="success" />
						</ListGroupItem>
					) : (
						this.state.categoryList.map((category) => (
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { changeCategory })(CategoryList);
