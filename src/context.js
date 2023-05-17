import React from "react";
import sublinks from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [closeBar, setCloseBar] = React.useState(false);
  const [Number, setNumber] = React.useState(0);
  const [hover, setHover] = React.useState(true);
  const IscloseBar = () => {
    setCloseBar(false);
  };
  const IsOpenBar = () => {
    setCloseBar(true);
  };
  const NumberZero = () => {
    setNumber(0);
    setHover(true);
  };
  const NumberOne = () => {
    setNumber(1);
    setHover(true);
  };
  const NumberTwo = () => {
    setNumber(2);
    setHover(true);
  };
  const HoverOut = () => {
    setHover(false);
  };

  return (
    <AppContext.Provider
      value={{
        closeBar,
        IsOpenBar,
        IscloseBar,
        sublinks,
        NumberZero,
        NumberOne,
        NumberTwo,
        Number,
        HoverOut,
        hover,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const GlobalContext = () => {
  return React.useContext(AppContext);
};
export { AppProvider, AppContext };
