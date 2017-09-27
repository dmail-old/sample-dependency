import { hello } from "@dmail/sample-common-dependency"

export const something = () => {
	console.log("never used")
}

export const helloWorld = `${hello} world`
