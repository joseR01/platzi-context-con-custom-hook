import { useState } from "react";

function useDataUser(data) {
  const [user, setUser] = useState(data);

  function actualizarUser(getDataUser) {
    setUser({ ...user, ...getDataUser });
  }
  function crearUser(getDataUser) {
    console.log(getDataUser);
  }
  function eliminarUser(getDataUser) {
    console.log(getDataUser);
  }

  const userState = {
    user,
  };

  const userDispatch = {
    actualizarUser,
    crearUser,
    eliminarUser,
  };

  return { userState, userDispatch };
}

export { useDataUser };
