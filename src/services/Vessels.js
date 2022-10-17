
// Vessels Service
import { apiClient, formatResponse } from "../apiClient";

export const GetVessels = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Vessels/GetVessels", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	GetVessels,
}