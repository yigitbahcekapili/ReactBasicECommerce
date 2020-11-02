import React, { Component } from "react";
import "./header.css";
import { Button, Col, Container, Jumbotron, Row, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { Login, Logoff } from "../../store/actions/header_actions";
import NotificationService from "alertifyjs";

class Header extends Component {
	constructor(props) {
		super();

		this.state = {
			userName: "",
		};
	}

	loginClickHandler = (userName) => {
		if (userName.length === 0) {
			NotificationService.error("Kullanıcı adı giriniz!");
			return;
		}

		this.props.dispatch(Login());
		NotificationService.success("Giriş başarılı");
	};

	logOffClickHandler = () => {
		this.props.dispatch(Logoff());
		this.setState({
			userName: "",
		});
		NotificationService.warning("Güle Güle");
	};

	render() {
		return (
			<Jumbotron className="header">
				<Container>
					<Row>
						<Col xs="8">
							<h3>Mamba Ticaret</h3>
						</Col>
						<Col xs="4">
							{!this.props.isLoginSuccess ? (
								<Row>
									<Col xs="8">
										<Input
											value={this.state.userName}
											placeholder="enter username"
											onChange={(e) => this.setState({ userName: e.target.value })}
										></Input>
									</Col>
									<Col xs="4">
										<Button
											onClick={() => this.loginClickHandler(this.state.userName)}
											color="info"
											className="float-right"
											size="sm"
										>
											Giriş Yap
										</Button>
									</Col>
								</Row>
							) : (
								<Row>
									<Col xs="8" style={{ backgroundColor: "AntiqueWhite" }}>
										<Label>
											{this.props.isLoginSuccess && <p>Merhaba, {this.state.userName}</p>}
										</Label>
									</Col>
									<Col xs="4">
										<Button
											onClick={() => this.logOffClickHandler()}
											color="info"
											className="float-right"
											size="sm"
										>
											Çıkış Yap
										</Button>
									</Col>
								</Row>
							)}
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoginSuccess: state.isLoginSuccess,
	};
};

export default connect(mapStateToProps)(Header);
