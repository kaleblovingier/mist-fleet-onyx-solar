import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/license-UCcZeI6V.js
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
	const { verifyKey } = await import("./license.server-Deu4zNmD.mjs");
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
	plan: readString(input, "plan"),
	soldTo: readString(input, "soldTo")
})).handler(mintLicenseKey_createServerFn_handler, async ({ data }) => {
	const { mintKey, mintKeyFromNote, pinOk, defaultPinSet, defaultPepperSet, parseIssuedPlan } = await import("./license.server-Deu4zNmD.mjs");
	try {
		if (!pinOk(data.pin)) return {
			ok: false,
			reason: "Operator PIN is wrong."
		};
		const plan = parseIssuedPlan(data.plan);
		const soldTo = data.soldTo.trim();
		return {
			ok: true,
			key: soldTo ? mintKeyFromNote(plan, soldTo) : mintKey(plan),
			plan,
			defaultPin: defaultPinSet(),
			defaultPepper: defaultPepperSet()
		};
	} catch (e) {
		return {
			ok: false,
			reason: e instanceof Error ? e.message : "License secrets are not configured."
		};
	}
});
var mintLicenseBatch_createServerFn_handler = createServerRpc({
	id: "69022fa5ec834cb344b7d8a1942c20f8240bdf6dc54600b17fb18bb31ada37e1",
	name: "mintLicenseBatch",
	filename: "src/lib/billing/license.ts"
}, (opts) => mintLicenseBatch.__executeServer(opts));
var mintLicenseBatch = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString(input, "pin"),
	plan: readString(input, "plan"),
	names: readString(input, "names")
})).handler(mintLicenseBatch_createServerFn_handler, async ({ data }) => {
	const { mintKeyedRows, parseIssuedPlan, parseNameList, pinOk, defaultPinSet, defaultPepperSet } = await import("./license.server-Deu4zNmD.mjs");
	try {
		if (!pinOk(data.pin)) return {
			ok: false,
			reason: "Operator PIN is wrong."
		};
		const names = parseNameList(data.names);
		if (!names.length) return {
			ok: false,
			reason: "Add at least one name — one per line."
		};
		const plan = parseIssuedPlan(data.plan);
		return {
			ok: true,
			plan,
			keys: mintKeyedRows(plan, names),
			defaultPin: defaultPinSet(),
			defaultPepper: defaultPepperSet()
		};
	} catch (e) {
		return {
			ok: false,
			reason: e instanceof Error ? e.message : "License secrets are not configured."
		};
	}
});
//#endregion
export { mintLicenseBatch_createServerFn_handler, mintLicenseKey_createServerFn_handler, redeemLicense_createServerFn_handler };
