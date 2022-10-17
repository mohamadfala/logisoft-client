
// Invoice Service
import { apiClient, formatResponse } from "../apiClient";

export const Closures = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Invoice/Closures", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Detail = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Invoice/Detail", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Invoice = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Invoice/Invoice", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Payment = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Invoice/Payment", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Search = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Invoice/Search", params)
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Closures,
	Detail,
	Invoice,
	Payment,
	Search,
}