import { useStore } from "./store/storeProvider";

function App() {
  return (
    <>
      <Fn1 />
    </>
  );
}

function Fn1() {
  const { userState, userDispatch } = useStore();

  const { user } = userState;
  const { actualizarUser, crearUser, eliminarUser } = userDispatch;

  console.log(user);
  function handleEdit() {
    const newObjeto = { cursos: 5 };
    actualizarUser(newObjeto);
    console.log("actualizando");
  }
  function handleCrear() {
    crearUser("creando");
  }
  function handleEliminar() {
    eliminarUser("elimianr");
  }
  return (
    <>
      <h1>hoy el componente 1</h1>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleCrear}>crear</button>
      <button onClick={handleEliminar}>eliminar</button>
    </>
  );
}
export default App;
