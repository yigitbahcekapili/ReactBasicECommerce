import { HeaderAction } from "../constants/header_constant";

export const Login = () => {
	return {
		type: HeaderAction.Login,
	};
};

export const Logoff = () => {
	return {
		type: HeaderAction.Logoff,
	};
};
