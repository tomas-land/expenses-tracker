"use client"
import React, { useContext, useState } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[]; // React.ReactNode

}
export type ContextType = {
  totalExpenses: number;
  setTotalExpenses: any;
  sumTotalExpenses: any;

}
const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider = ({ children }: IProps) => {

  const [totalExpenses, setTotalExpenses] = useState(0)

  const sumTotalExpenses = (amount: number) => {
    setTotalExpenses(totalExpenses + amount);
  }

  return (
    <AppContext.Provider
      value={{
        totalExpenses,
        setTotalExpenses,
        sumTotalExpenses,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
