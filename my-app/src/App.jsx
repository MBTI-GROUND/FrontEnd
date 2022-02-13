import React, { useState, Fragment, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import { ChatContainer } from "./components/ChatContainer";

// 로직은 App.js에서만 다룰것임.
function App() {

  return (
    <Fragment>
      <ChatContainer />
    </Fragment>
  );
}

export default App;
