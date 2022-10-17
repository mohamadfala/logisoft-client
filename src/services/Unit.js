
// Unit Service
import { apiClient, formatResponse } from "../apiClient";

export const GetUnitByBarcode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Unit/GetUnitByBarcode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitByBol = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Unit/GetUnitByBol", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitByCode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Unit/GetUnitByCode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitBySerial = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Unit/GetUnitBySerial", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	GetUnitByBarcode,
	GetUnitByBol,
	GetUnitByCode,
	GetUnitBySerial,
}