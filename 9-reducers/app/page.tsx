"use client";

import { SimpleComponent1 } from "./components/SimpleComponent1";
import { SimpleComponent2 } from "./components/SimpleComponent2";
import { SimpleContext } from "./contexts/SimpleContext";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SimpleContext.Provider value="Hello world">
          <SimpleComponent1 />
          <SimpleComponent2 />
        </SimpleContext.Provider>
      </main>
    </div>
  );
}
