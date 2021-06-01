// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import * as React from "react";

const StoreContext = React.createContext();

function storeReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { webspeedtest: state.webspeedtest + 1 };
    }
    case "decrement": {
      return { webspeedtest: state.webspeedtest - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(storeReducer, {
    webspeedtest: 0,
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
export { StoreProvider, useStore };
