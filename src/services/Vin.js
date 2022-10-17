
// Vin Service
import { apiClient, formatResponse } from "../apiClient";

export const Decode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Vin/Decode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Decode,
}