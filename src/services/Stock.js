
// Stock Service
import { apiClient, formatResponse } from "../apiClient";

export const Agents = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Agents", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Barcode = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Barcode", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const BookingDischargeVoyages = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/BookingDischargeVoyages", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const BookingPendingDischargeItems = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/BookingPendingDischargeItems", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Countries = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Countries", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const CustomsStockSearch = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/CustomsStockSearch", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Dashboard = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/Dashboard", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Excel = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/Excel", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Parks = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Parks", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Parties = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Parties", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Ports = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Ports", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const ScanBookingDischargeUnits = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/ScanBookingDischargeUnits", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Search = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/Search", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const UpdateCustomsDocument = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Stock/UpdateCustomsDocument", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const VehicleTypes = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/VehicleTypes", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Voyages = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Stock/Voyages", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Agents,
	Barcode,
	BookingDischargeVoyages,
	BookingPendingDischargeItems,
	Countries,
	CustomsStockSearch,
	Dashboard,
	Excel,
	Parks,
	Parties,
	Ports,
	ScanBookingDischargeUnits,
	Search,
	UpdateCustomsDocument,
	VehicleTypes,
	Voyages,
}