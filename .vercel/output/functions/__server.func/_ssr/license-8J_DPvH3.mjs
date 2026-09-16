import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/license-8J_DPvH3.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function readString(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
var redeemLicense_createServerFn_handler = createServerRpc({
	id: "44d8bbe640632087e1ae0c85eee1989e89f5aea9b69ea3fe55986c2c45da9af4",
	name: "redeemLicense",
	filename: "src/lib/billing/license.ts"
}, (opts) => redeemLicense.__executeServer(opts));
var redeemLicense = createServerFn({ method: "POST" }).validator((input) => ({ key: readString(input, "key") })).handler(redeemLicense_createServerFn_handler, async ({ data }) => {
	const { verifyKey } = await import("./license.server-mBytrBHZ.mjs");
	if (!data.key.trim()) return {
		ok: false,
		reason: "Paste a key."
	};
	return verifyKey(data.key);
});
var mintLicenseKey_createServerFn_handler = createServerRpc({
	id: "c4b9a08d61fce0057ad5128b30c506678321938dc4e4e2a201694c6b9199409c",
	name: "mintLicenseKey",
	filename: "src/lib/billing/license.ts"
}, (opts) => mintLicenseKey.__executeServer(opts));
var mintLicenseKey = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString(input, "pin"),
	plan: readString(input, "plan")
})).handler(mintLicenseKey_createServerFn_handler, async ({ data }) => {
	const { mintKey, pinOk, defaultPinSet } = await import("./license.server-mBytrBHZ.mjs");
	if (!pinOk(data.pin)) return {
		ok: false,
		reason: "Operator PIN is wrong."
	};
	const plan = data.plan === "lab" || data.plan === "life" || data.plan === "pro" ? data.plan : "life";
	return {
		ok: true,
		key: mintKey(plan),
		plan,
		defaultPin: defaultPinSet()
	};
});
//#endregion
export { mintLicenseKey_createServerFn_handler, redeemLicense_createServerFn_handler };
