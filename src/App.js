import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Auth from "./pages/Auth";
import AdminAuth from "./pages/AdminAuth";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";
import AdminPanel from "./pages/AdminPanel";
import theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Switch>
            <Route path="/" exact>
              <Auth />
            </Route>
            <Route path="/wallet" exact>
              <AccountProvider>
                <Wallet />
              </AccountProvider>
            </Route>
            <Route path="/wallet/:id" exact>
              <AccountProvider>
                <Account />
              </AccountProvider>
            </Route>
            <Route path="/admin/auth" exact>
              <AccountProvider>
                <AdminAuth />
              </AccountProvider>
            </Route>
            <Route path="/admin" exact>
              <AccountProvider>
                <AdminPanel />
              </AccountProvider>
            </Route>
          </Switch>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
