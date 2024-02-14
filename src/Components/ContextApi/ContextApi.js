import { useContext, createContext, useState } from "react";

export const UserContext = createContext({
    user:false,
});

export const UserProvide = UserContext.Provider;
export const GlobalUser =()=> useContext(UserContext);
