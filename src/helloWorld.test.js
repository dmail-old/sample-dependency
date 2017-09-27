import { helloWorld } from "./helloWorld.js"

const test = ({ pass, fail }) => {
	if (helloWorld === "hello world") {
		return pass("hello world as expected")
	}
	return fail("expecting hello world")
}
export default test
