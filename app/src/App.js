import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
	const [pubKey, setPubkey] = useState(null)
	async function connectWallet() {
		try {
			const {solflare} = window
			if (solflare) {
				if (solflare.isSolflare) {
					await solflare.connect()
					let pubKey = solflare.publicKey.toString()
					setPubkey(pubKey)
				}
			} else {
				alert("Solflare wallet not found")
			}
		} catch (error) {
			alert(error)
		}
	}
	useEffect(() => {
		// connectWallet()
	}, [])
	return (
		<div className="App">
			<div className="container">
				<div className="header-container">
					<p className="header">🍭 Candy Drop</p>
					<p className="sub-text">NFT drop machine with fair mint</p>
					{!pubKey && <button className="cta-button connect-wallet-button" onClick={connectWallet}>Connect to Wallet</button>}
				</div>
				<div className="footer-container">
					<img
						alt="Twitter Logo"
						className="twitter-logo"
						src={twitterLogo}
					/>
					<a
						className="footer-text"
						href={TWITTER_LINK}
						target="_blank"
						rel="noreferrer"
					>{`Adapted from @${TWITTER_HANDLE}`}</a>
				</div>
			</div>
		</div>
	);
};

export default App;
