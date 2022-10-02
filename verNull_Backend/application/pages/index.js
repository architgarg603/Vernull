import {
	useContract,
	useContractRead,
	Web3Button,
	ConnectWallet,
	useAddress,
	useContractWrite,
	useAccount,
} from "@thirdweb-dev/react";
import { hexToNumber } from "web3-utils";

import { useState } from "react";

// Your smart contract address here
const contractAddress = "0x7Bb4A2c24b3eDD7Ca6Eb1ddA1cC74b15B562e130";

export default function Home() {
	const address = useAddress();
	const account = useAccount();

	// Get the smart contract
	const { contract } = useContract(
		"0x7Bb4A2c24b3eDD7Ca6Eb1ddA1cC74b15B562e130"
	);
	// console.log(account, toString(address));
	// Read the current greeting

	// Read the current greeting
	const {
		data: currentRewards,
		isLoading1,
		error1,
	} = useContractRead(contract, "balanceOf", address);

	// implementation
	// {
	// 	isLoading1 ? "Loading..." : currentRewards && hexToNumber(currentRewards);
	// }

	//wrtie the contract
	const {
		mutate: register,
		isLoading,
		error,
	} = useContractWrite(contract, "register");

	//implemention
	// onClick={() => register()}

	const {
		mutate: dailyRewards,
		isLoading2,
		error2,
	} = useContractWrite(contract, "dailyRewards");

	//implemention
	// onClick={() => dailyRewards([accuracy, streak, address])}

	const {
		mutate: streakRewards,
		isLoading3,
		error3,
	} = useContractWrite(contract, "streakRewards");

	//implemention
	// onClick={() => streakRewards([streak, address])}
	return (
		<div>
			<ConnectWallet accentColor="#262C3A" colorMode="dark" />
			<p>
				Address: <b>{address}</b>
			</p>
			<p>
				Current greeting:{" "}
				<b>
					{isLoading1
						? "Loading..."
						: currentRewards && hexToNumber(currentRewards)}
				</b>
			</p>
			<button
				// contractAddress={contractAddress}
				onClick={() => dailyRewards([86, 1, address])}
				// colorMode="light"
				// accentColor="#F213A4"
			>
				Daily Rewards
			</button>

			<button
				// contractAddress={contractAddress}
				onClick={() => streakRewards([1, address])}
				// colorMode="light"
				// accentColor="#F213A4"
			>
				streak Rewards
			</button>

			<button
				// contractAddress={contractAddress}
				onClick={() => dailyRewards([86, 1, address])}
				// colorMode="light"
				// accentColor="#F213A4"
			>
				Daily Rewards
			</button>
		</div>
	);
}
