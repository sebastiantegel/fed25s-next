import { ClientComponent } from "./ClientComponent";

export const Greeting = () => {
  //   const [text, setText] = useState("Hello world - from state");
  //   useEffect(() => {}, []);
  //   useContext();
  //   useReducer();

  return (
    <>
      <h2>Hello world - from server</h2>
      <ClientComponent buttonText="Ändra" />
    </>
  );
};
