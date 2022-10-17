
// Organization Service
import { apiClient, formatResponse } from "../apiClient";

export const Allowed = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Organization/Allowed", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Switch = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Organization/Switch", params)
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Allowed,
	Switch,
}