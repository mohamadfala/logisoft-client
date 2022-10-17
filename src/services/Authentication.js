
// Authentication Service
import { apiClient, formatResponse } from "../apiClient";

export const Resume = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Authentication/Resume", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const SignIn = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Authentication/SignIn", params)
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Resume,
	SignIn,
}