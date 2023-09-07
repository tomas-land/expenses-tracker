'use client';
import React, { useContext, useState } from 'react';

interface IProps {
  children: JSX.Element | JSX.Element[]; // React.ReactNode
}
export type ContextType = {
  totalExpenses: number;
  setTotalExpenses: any;
  sumTotalExpenses: any;
  isStatsDropdownOpen: boolean;
  setIsStatsDropdownOpen: (value: boolean) => void;
  toggleStatsDropdown: () => void;
};
const AppContext = React.createContext<ContextType>({} as ContextType);

const AppProvider = ({ children }: IProps) => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  const sumTotalExpenses = (amount: number) => {
    setTotalExpenses(totalExpenses + amount);
  };
  /////////////////
  const [isStatsDropdownOpen, setIsStatsDropdownOpen] = useState(false);

  const toggleStatsDropdown = () => {
    setIsStatsDropdownOpen((prevState) => !prevState);
  };
  return (
    <AppContext.Provider
      value={{
        totalExpenses,
        setTotalExpenses,
        sumTotalExpenses,
        isStatsDropdownOpen,
        setIsStatsDropdownOpen,
        toggleStatsDropdown,
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
