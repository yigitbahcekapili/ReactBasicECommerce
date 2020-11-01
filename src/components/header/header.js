import React, { Component } from "react";
import "./header.css";
import { Button, Col, Container, Jumbotron, Row } from "reactstrap";

export default class Header extends Component {
	render() {
		return (
			<Jumbotron className="header">
				<Container>
					<Row>
						<Col xs="4">
							<h3>Mamba Ticaret</h3>
						</Col>
						<Col xs="8">
							<Button
								onClick={this.loginOnClick}
								color="info"
								className="float-right"
								size="sm"
							>
								Giriş Yap
							</Button>
							<Button
								onClick={this.registerOnClick}
								color="info"
								className="float-right"
								style={{ marginRight: "10px" }}
								size="sm"
							>
								Kayıt Ol
							</Button>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
