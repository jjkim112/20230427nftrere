import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <Link to="/">
        <div className="ml-1 text-xl">Ble-Chess</div>
      </Link>
      {/* 지갑연결 안끊기려면 이렇게 하라고하심 그래도 수동으로하면 끊긴다고함 주소에서*/}
      <div className="flex items-center">
        {account ? (
          <div>
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </div>
        ) : (
          <button
            className="p-2 bg-gray-800 rounded-full ml-1 text-white"
            onClick={onClickAccount}
          >
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
