import { Cliffhanger } from "./components/Cliffhanger";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { ConditionalSpinner } from "./components/ConditionalSpinner";
import { Interpolation } from "./components/Interpolation";
import { ListObject } from "./components/ListObject";
import { ListSimple } from "./components/ListSimple";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Interpolation /> */}
        {/* <ConditionalRendering /> */}
        {/* <ConditionalSpinner /> */}
        {/* <ListSimple /> */}
        {/* <ListObject /> */}
        <Cliffhanger />
      </main>
    </div>
  );
}
