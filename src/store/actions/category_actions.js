import { CategoryAction } from "../constants/category_constant";

// export const getCategoryList = () => (dispatch) => {
// 	let url = API_BASE_URL + API_CONTROLLER.categories;

// 	HttpRequestHelper.get(url).then((data) =>
// 		dispatch({
// 			type: "GET_CATEGORY",
// 			payload: data,
// 		})
// 	);
// };

export const changeCategory = (category) => {
	return {
		type: CategoryAction.ChangeCategory,
		payload: category,
	};
};


