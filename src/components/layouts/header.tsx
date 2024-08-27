import React from "react";

type Props = {};

export default function header({}: Props) {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-x-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <span className="text-gray-500">Welcome back, John Doe !</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
          Connect wallet
        </button>
      </div>

      <div className="flex gap-x-4">
        <button className=" border-black border-2 text-white font-bold py-2 px-6 rounded">
          C
        </button>
        <button className="border-black border-2 text-white font-bold py-2 px-6 rounded">
          C
        </button>
      </div>
    </header>
  );
}
