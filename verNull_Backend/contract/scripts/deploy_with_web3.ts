import { deploy } from "./web3-lib";

(async () => {
	try {
		const result = await deploy("VerNull", ["VerNull", "VN", 18, 1000]);
		console.log(`address: ${result.address}`);
	} catch (e) {
		console.log(e.message);
	}
})();
