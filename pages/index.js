import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { active, account, activate, deactivate } = useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className={styles.main}>
      <div>
        <button onClick={connect}>Get public key</button>
        {active ? (
          <div>
            <span>
              <b>{account}</b>
            </span>
            <button onClick={disconnect}>Log out</button>
          </div>
        ) : (
          <p>Not connected</p>
        )}
      </div>
    </div>
  );
}
