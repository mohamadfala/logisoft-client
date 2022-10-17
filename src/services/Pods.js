
// Pods Service
import { apiClient, formatResponse } from "../apiClient";

export const Pods = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Pods", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Pods,
}