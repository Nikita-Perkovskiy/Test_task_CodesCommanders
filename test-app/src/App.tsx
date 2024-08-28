import React, { useState, useEffect } from "react";
import CustomRouter from "./Routes/CustomRouter.tsx";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CustomRouter />
      </Provider>
    </div>
  );
}

export default App;
