import stuff from "./stuff.js"

if (typeof stuff === "string") {
	console.log("test passed")
} else {
	throw new Error("test failed")
}
