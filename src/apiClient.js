import axios from 'axios';

// initiat an axios instance with configurations
export let apiClient = axios.create({
  baseURL: "https://app.logisoft.io/api/",
  withCredentials: true,
  timeout: 50000,
});

// set client token in headers
export const setClientToken = token => {
	if(token) {
		apiClient.defaults.headers.common['d_session'] = token;
	}
	else {
	  delete apiClient.defaults.headers.common['d_session'];
	}
};

// function to format a custom unified response
export const formatResponse = response => {
	return {
		success: response ? response.status === 200 : false,
		status: response ? response.status : response.response.status,
		data: response ? response.data : response.response.data,
	};
};

// custom api response handlers
const responseSuccessHandler = (response) => {
	return response;
};
const responseErrorHandler = (error) => {
  console.log("🔴 API_ERROR:", error)
	return Promise.reject(error);
};
apiClient.interceptors.response.use(
	(response) => responseSuccessHandler(response),
	(error) => responseErrorHandler(error)
);

export default {
	apiClient,
	setClientToken,
	formatResponse
};