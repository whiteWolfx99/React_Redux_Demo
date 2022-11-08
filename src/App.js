import "./App.css";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import Milkshakecontainer from "./components/milkshakecontainer";
import NewCakeContainer from "./components/NewCakeContainer";
import Header from "./components/Header";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <hr></hr>
       <div className="makeit">
       <div className="itemcontainer">
          <ItemContainer cake />
          <ItemContainer />
        </div>
        <hr></hr>
        <div className="Header">
          <Header />
        </div>
          <div className="cakes">
          <HooksCakeContainer />
          <CakeContainer />
          <NewCakeContainer />
        </div>
        <hr></hr>
        <div className="container">
          <div className="icecream">
            <IceCreamContainer />
          </div>
          <div className="milkshake">
            <Milkshakecontainer />
          </div>
        </div>
       </div>
      </div>
    </Provider>
  );
}

export default App;
