import React, { useState, useContext } from "react";

const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState([]);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;

export const useAccount = () => {
  return useContext(AccountContext);
};
