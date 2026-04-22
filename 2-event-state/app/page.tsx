import { Change } from "./components/Change";
import { Click } from "./components/Click";
import { State } from "./components/State";
import { StateChangeNameByUser } from "./components/StateChangeNameByUser";
import { StateList } from "./components/StateList";
import { StateObject } from "./components/StateObject";
import { Submit } from "./components/Submit";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Click />
        <Change />
        <Submit /> */}
        {/* <State /> */}
        {/* <StateChangeNameByUser /> */}
        {/* <StateObject /> */}
        <StateList />
      </main>
    </div>
  );
}
