
// UnitTracking Service
import { apiClient, formatResponse } from "../apiClient";

export const GetUnitByBarcode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("UnitTracking/GetUnitByBarcode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitByBol = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("UnitTracking/GetUnitByBol", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitByCode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("UnitTracking/GetUnitByCode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const GetUnitBySerial = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("UnitTracking/GetUnitBySerial", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	GetUnitByBarcode,
	GetUnitByBol,
	GetUnitByCode,
	GetUnitBySerial,
}