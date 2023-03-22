import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const initialState = {
    chatId: null,
    user: {},
  };

  const { currentUser } = useContext(AuthContext);

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        const combinedId =
          currentUser.uid > action.payload.uid
            ? currentUser.uid + action.payload.uid
            : action.payload.uid + currentUser.uid;
        return {
          user: action.payload,
          chatId: combinedId,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
