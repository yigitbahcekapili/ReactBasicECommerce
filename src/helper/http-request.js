const get = (url) => {
	var request = new Request(url);
	request.headers.append("mamba", "mambaValue");

	return fetch(request).then((response) => response.json());
};

const post = (url, data) => {
	var request = new Request(url);
	request.method = "POST";
	request.body(JSON.stringify(data));

	return fetch(request).then((response) => response.json());
};

export const HttpRequestHelper = {
	get,
	post,
};
