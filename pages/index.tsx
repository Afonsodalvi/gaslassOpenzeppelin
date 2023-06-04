import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT_ADDRESS } from "../const/addresses";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to<a href="https://omnestech.org/">OmnesBlockchain</a>!
        </h1>
      <ConnectWallet/>
        <Web3Button
        contractAddress= "0xFc895219553f2a9312f81aBDC91914f62390b61a"
        action={async (contract)=> {contract.erc1155.claim(0,1)}}
        onSuccess={() => alert("Claimed!")}
        >Claim</Web3Button>
      </main>
    </div>
  );
};

export default Home;
