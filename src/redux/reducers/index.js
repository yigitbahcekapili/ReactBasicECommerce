const INITIAL_STATE = {
	currentCategoryId: 0,
	currentCategoryName: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_CATEGORY":
			return {
				...state,
				currentCategoryId: action.payload.id,
				currentCategoryName: action.payload.categoryName,
			};
		default:
			return state;
	}
};
