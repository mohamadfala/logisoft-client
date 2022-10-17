
// Pols Service
import { apiClient, formatResponse } from "../apiClient";

export const Pols = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Pols", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Pols,
}