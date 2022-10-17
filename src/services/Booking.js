
// Booking Service
import { apiClient, formatResponse } from "../apiClient";

export const Cancel = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/Cancel", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Confirmation = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Confirmation", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Countries = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Countries", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Currencies = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Currencies", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const CustomTemplates = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/CustomTemplates", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Detail = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Detail", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Divisions = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Divisions", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const DockReceipt = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/DockReceipt", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Document = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Document", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const DraftBl = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/DraftBl", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Invoice = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Invoice", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Models = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Models", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Parties = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Parties", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Party = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Party", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const PartyDetail = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/PartyDetail", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Ports = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Ports", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const PortsForAgent = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/PortsForAgent", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Quote = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/Quote", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const ReplyQuote = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/ReplyQuote", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const Save = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/Save", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const SaveParty = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/SaveParty", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const SavePartyDetail = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/SavePartyDetail", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const SearchUnits = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/SearchUnits", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const ShipperAttributes = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/ShipperAttributes", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Track = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Track", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Transits = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/Transits", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const UnitModels = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/UnitModels", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const UnitTypes = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/UnitTypes", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const UploadUnitPaperForCustoms = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/UploadUnitPaperForCustoms", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const UploadUnitPaperForCustomsToken = async (params) => {
	params = params || {};
	const response = await apiClient
		.get("Booking/UploadUnitPaperForCustomsToken", { params })
		.catch((e) => e);
	return formatResponse(response);
};

export const Voyages = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/Voyages", params)
		.catch((e) => e);
	return formatResponse(response);
};

export const WebSearchUnits = async (params) => {
	params = params || {};
	const response = await apiClient
		.post("Booking/WebSearchUnits", params)
		.catch((e) => e);
	return formatResponse(response);
};

export default {
	Cancel,
	Confirmation,
	Countries,
	Currencies,
	CustomTemplates,
	Detail,
	Divisions,
	DockReceipt,
	Document,
	DraftBl,
	Invoice,
	Models,
	Parties,
	Party,
	PartyDetail,
	Ports,
	PortsForAgent,
	Quote,
	ReplyQuote,
	Save,
	SaveParty,
	SavePartyDetail,
	SearchUnits,
	ShipperAttributes,
	Track,
	Transits,
	UnitModels,
	UnitTypes,
	UploadUnitPaperForCustoms,
	UploadUnitPaperForCustomsToken,
	Voyages,
	WebSearchUnits,
}