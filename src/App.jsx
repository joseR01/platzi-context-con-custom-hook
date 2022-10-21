import { useState } from "react";

function App() {
  const [stado1, setStado1] = useState("soy el estado1");
  const [stado2, setStado2] = useState("soy el estado2");
  const [stado3, setStado3] = useState("soy el estado3");
  const [stado4, setStado4] = useState("soy el estado4");
  return (
    <>
      <Fn1 stado1={stado1} stado2={stado2} stado3={stado3} stado4={stado4} />
    </>
  );
}

export default App;

function Fn1({ stado1, stado2, stado3, stado4 }) {
  return (
    <>
      <h1>hoy el componente 1</h1>
      {/* {stado1}
      {stado2}
      {stado3}
      {stado4} */}
      <Fn2 stado1={stado1} stado2={stado2} stado3={stado3} stado4={stado4} />
    </>
  );
}
function Fn2({ stado1, stado2, stado3, stado4 }) {
  return (
    <>
      <h1>hoy el componente 2 </h1>

      <Fn3 stado1={stado1} stado2={stado2} stado3={stado3} stado4={stado4} />
    </>
  );
}
function Fn3({ stado1, stado2, stado3, stado4 }) {
  return (
    <>
      <h1>hoy el componente 3</h1>

      <Fn4 stado1={stado1} stado2={stado2} stado3={stado3} stado4={stado4} />
    </>
  );
}
function Fn4({ stado1, stado2, stado3, stado4 }) {
  return (
    <>
      <h1>hoy el componente 4</h1>

      <Fn5 tado1={stado1} stado2={stado2} stado3={stado3} stado4={stado4} />
    </>
  );
}
function Fn5({ stado1, stado2, stado3, stado4 }) {
  return (
    <>
      <h1>hoy el componente 5</h1>
      {stado1}
      {stado2}
      {stado3}
      {stado4}
    </>
  );
}
