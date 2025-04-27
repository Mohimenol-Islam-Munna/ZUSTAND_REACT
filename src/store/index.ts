import { createContext, useContext, useState } from "react";
import { create } from "zustand";

const useStore = create((set) => {
  return {
    count: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),
    decrement: () => set((state: any) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  };
});

export const customHook = () => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue((prev) => prev + 1);
  };
  const decrementValue = () => {
    setValue((prev) => prev - 1);
  };
  const resetValue = () => {
    setValue(0);
  };

  return {
    value,
    incrementValue,
    decrementValue,
    resetValue,
  };
};

export const globalContext = createContext<any>(null);
export const GlobalContextProvider = globalContext.Provider;

export const useSetGlobalContext = () => {
  const [data, setData] = useState(0);

  const incrementData = () => {
    setData((prev) => prev + 1);
  };
  const decrementData = () => {
    setData((prev) => prev - 1);
  };
  const resetData = () => {
    setData(0);
  };

  return {
    data,
    incrementData,
    decrementData,
    resetData,
  };
};

export const useGetGlobalContext = () => {
  const globalContextData = useContext(globalContext);

  return globalContextData;
};

export default useStore;
