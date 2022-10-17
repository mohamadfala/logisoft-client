
// Voyage Service
import { apiClient, formatResponse } from "../apiClient";

export const GetVoyageDetails = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Voyage/GetVoyageDetails", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Pods = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Voyage/Pods", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Pols = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Voyage/Pols", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Rotation = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Voyage/Rotation", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Schedule = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Voyage/Schedule", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	GetVoyageDetails,
	Pods,
	Pols,
	Rotation,
	Schedule,
}