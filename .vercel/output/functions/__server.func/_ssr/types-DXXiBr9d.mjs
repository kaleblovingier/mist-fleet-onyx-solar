import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/types-DXXiBr9d.js
var types_exports = /* @__PURE__ */ __exportAll({
	CONNECTOR_TOKEN_HEADER: () => CONNECTOR_TOKEN_HEADER,
	CONNECTOR_TOKEN_PENDING_CODE: () => CONNECTOR_TOKEN_PENDING_CODE,
	CONNECTOR_TOKEN_READY_EVENT: () => CONNECTOR_TOKEN_READY_EVENT,
	ConnectorType: () => ConnectorType,
	GmailTools: () => GmailTools
});
var CONNECTOR_TOKEN_HEADER = "x-connector-access-token";
var CONNECTOR_TOKEN_PENDING_CODE = "connector_token_pending";
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
var ConnectorType = {
	GoogleDrive: "GoogleDrive",
	Gmail: "Gmail",
	GoogleCalendar: "GoogleCalendar",
	Outlook: "Outlook",
	OutlookCalendar: "OutlookCalendar",
	MicrosoftTeams: "MicrosoftTeams",
	Mcp: "Mcp"
};
var GmailTools = {
	search: "gmail_search",
	getMessage: "gmail_get_message",
	createDraft: "gmail_create_draft"
};
//#endregion
export { types_exports as a, ConnectorType as i, CONNECTOR_TOKEN_PENDING_CODE as n, CONNECTOR_TOKEN_READY_EVENT as r };
