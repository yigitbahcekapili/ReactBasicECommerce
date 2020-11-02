import { CategoryAction } from "../constants/category_constant";
import { HeaderAction } from "../constants/header_constant";

const INITIAL_STATE = {
	isLoginSuccess: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CategoryAction.ChangeCategory:
			return {
				...state,
				currentCategoryId: action.payload.id,
				currentCategoryName: action.payload.categoryName,
			};
		case HeaderAction.Login:
			return {
				...state,
				isLoginSuccess: true,
			};
		case HeaderAction.Logoff:
			return {
				...state,
				isLoginSuccess: false,
			};

		default:
			return state;
	}
};
