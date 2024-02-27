// context/ApiContext.tsx

import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Define types for state and actions
type State = {
  data: any | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: any }
  | { type: "FETCH_ERROR"; payload: string };

// Define initial state
const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create context
const ApiContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);

// Custom hook to use context
export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

// Provider component
export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>;
};
