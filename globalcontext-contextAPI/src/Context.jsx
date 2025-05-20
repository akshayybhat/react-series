import { createContext, useContext, useState } from 'react'

// export const GlobalContext = createContext(); // invoke and export context and use in useContext wherever needed.

const GlobalContext = createContext();
// useGlobalContext is a custom hook, which uses useCOntext(GlobalContext) in this component and other components just can invoke this custom hook 
export const useGlobalContext = () =>{
  return useContext(GlobalContext) 
}


function AppContext ({children}){
  const [theme, setTheme] = useState("light");
  return(
    <GlobalContext.Provider value={{theme,setTheme}}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext