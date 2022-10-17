
// Vessel Service
import { apiClient, formatResponse } from "../apiClient";

export const Search = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Vessel/Search", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Search,
}