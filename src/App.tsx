import React from 'react';
import SignUp from "./components/SignUpForm";
import LoginMenu from "./components/LoggedInMenu";
import SellOrPay from "./components/SellOrPayMenu";
import SellObject from "./components/SellObjectForm";
import CustomizedTables from "./components/TransactionTable";

function App() {
  return (
    <div>
      <a>Hello dude!</a>
        <CustomizedTables />
    </div>
  );
}

export default App;
