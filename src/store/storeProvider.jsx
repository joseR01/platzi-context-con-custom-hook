import { createContext, useContext } from "react";
import { useDataUser } from "./slice/useDataUser";
const data = {
  nombre: "jose",
  edad: 30,
  cursos: 0,
};

const Store = createContext();

function StoreProvider({ children }) {
  const { userState, userDispatch } = useDataUser(data);

  return (
    <Store.Provider value={{ userState, userDispatch }}>
      {children}
    </Store.Provider>
  );
}

function useStore() {
  const store = useContext(Store);
  return store;
}

export { StoreProvider, useStore };
