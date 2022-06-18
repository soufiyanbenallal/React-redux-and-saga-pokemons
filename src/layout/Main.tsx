import React from "react";
import { IMainProps } from "../models/general";

function Main({empty, error, loading, children, title} : IMainProps) {
  if (error) {
    return (
      <div className="max-w-7xl mx-auto text-4xl font-bold sm:px-6 lg:px-8 py-16 ">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto text-4xl font-bold sm:px-6 lg:px-8 py-16">
        Loading...
      </div>
    );
  }

  if (empty) {
    return (
      <div className="max-w-7xl mx-auto text-4xl font-bold sm:px-6 lg:px-8 py-16">
        No pokemons
      </div>
    );
  }

  return (
      <main className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold pb-16">{title}</h2>
          {children}
        </div>
      </main>
  );
}

export default Main;
