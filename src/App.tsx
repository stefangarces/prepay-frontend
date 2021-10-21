import React from 'react';
import SignUp from "./components/SignUpForm";
import LoginMenu from "./components/LoggedInMenu";
import SellOrPay from "./components/SellOrPayMenu";
import SellObject from "./components/SellObjectForm";
import CustomizedTables from "./components/TransactionTable";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <a>Hello dude!</a>
        <LoginMenu />

      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default App;
