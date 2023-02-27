import React, { createContext, ReactNode } from 'react'

type context ={
  contextNama:string;
}
export const UserContext = createContext<context>({contextNama:""});
type Props = {
  children:ReactNode;
}

export const UseProvider = (props:Props) => {
  const {children} = props;
  const contextNama = "aaa";
  return (
    <UserContext.Provider value={{contextNama}}>
      {children}
    </UserContext.Provider>
  )
}
