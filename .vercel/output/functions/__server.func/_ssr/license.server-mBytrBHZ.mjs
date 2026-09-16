import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/license.server-mBytrBHZ.js
function env(key) {
	return process.env[key]?.trim() || void 0;
}
var PEPPER = env("LICENSE_PEPPER") ?? "firstpass-heme-license-v1";
var PIN = env("FOUNDER_PIN") ?? "heme-450";
function hmac(payload) {
	return createHmac("sha256", PEPPER).update(payload).digest("hex").slice(0, 8).toUpperCase();
}
function safeEq(a, b) {
	const aa = Buffer.from(a);
	const bb = Buffer.from(b);
	if (aa.length !== bb.length) return false;
	return timingSafeEqual(aa, bb);
}
function pinOk(pin) {
	return safeEq(pin.trim(), PIN);
}
function defaultPinSet() {
	return !env("FOUNDER_PIN");
}
function mintKey(plan) {
	const body = randomBytes(4).toString("hex").toUpperCase();
	const tag = plan.toUpperCase();
	return `FP-${tag}-${body}-${hmac(`${tag}:${body}`)}`;
}
function verifyKey(raw) {
	const key = raw.trim().toUpperCase().replace(/\s+/g, "");
	const m = /^FP-(PRO|LAB|LIFE)-([0-9A-F]{8})-([0-9A-F]{8})$/.exec(key);
	if (!m) return {
		ok: false,
		plan: "pro",
		lifetime: false,
		license: "",
		reason: "Not a FirstPass key."
	};
	const tag = m[1];
	const body = m[2];
	const sig = m[3];
	if (!safeEq(sig, hmac(`${tag}:${body}`))) return {
		ok: false,
		plan: "pro",
		lifetime: false,
		license: "",
		reason: "Signature does not verify."
	};
	if (tag === "LIFE") return {
		ok: true,
		plan: "lab",
		lifetime: true,
		license: key
	};
	if (tag === "LAB") return {
		ok: true,
		plan: "lab",
		lifetime: false,
		license: key
	};
	return {
		ok: true,
		plan: "pro",
		lifetime: false,
		license: key
	};
}
//#endregion
export { defaultPinSet, mintKey, pinOk, verifyKey };
