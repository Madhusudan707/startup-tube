import { useContext, createContext, useReducer } from "react";
import { filterReducer, initialState } from "../reducers/filter";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider
      value={{ filterState: state, filterDispatch: dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
