
// Manifest Service
import { apiClient, formatResponse } from "../apiClient";

export const Excel = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Manifest/Excel", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Search = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Manifest/Search", params)
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Excel,
	Search,
}