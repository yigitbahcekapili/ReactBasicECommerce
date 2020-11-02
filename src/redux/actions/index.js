// import { HttpRequestHelper } from "../../helper/http-request";
// import { API_BASE_URL, API_CONTROLLER } from "../../constants/api-constants";

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
		type: "CHANGE_CATEGORY",
		payload: category,
	};
};
