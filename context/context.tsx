"use client"
import React, { useContext, useState } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[]; // React.ReactNode

}
export type ContextType = {
  totalExpenses: number;
  setTotalExpenses: any;
  addExpenses:any;

}
const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider = ({ children }: IProps) => {
  // const [showSubItems, setShowSubItems] = useState(false)
  const [totalExpenses, setTotalExpenses] = useState(0)

  const addExpenses = (amount: number) => {
    setTotalExpenses(totalExpenses + amount);
    // const total = totalExpenses.map((item:any) => item).reduce((prev:number, curr:number) => prev + curr, 0);

    console.log(totalExpenses)
  }


  return (
    <AppContext.Provider
      value={{
        totalExpenses,
        setTotalExpenses,
        addExpenses
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
