import { useState } from "react";
import { useDocumentTitle } from "react-customs";

function Content() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Count: ${count}`);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-8 w-full flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-zinc-100">Count: {count}</h1>
          <p className="mt-1 text-zinc-400 text-sm max-w-[244px] text-center leading-snug">
            Increment the count to see changes in document's title.
          </p>
          <button
            onClick={handleCount}
            className="mt-8 py-2.5 px-5 bg-indigo-400 text-black font-semibold rounded-lg text-sm hover:opacity-90 transition active:translate-y-[1px]"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}

export default Content;
