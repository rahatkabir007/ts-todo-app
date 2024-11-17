"use client";

import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store} >
      <ToastContainer
      // position="top-right"
      // autoClose={2000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      />
      {children}
    </Provider>
  );
};

export default StoreProvider;