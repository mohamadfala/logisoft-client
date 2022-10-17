
// BillOfLading Service
import { apiClient, formatResponse } from "../apiClient";

export const Detail = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("BillOfLading/Detail", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Document = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("BillOfLading/Document", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Detail,
	Document,
}