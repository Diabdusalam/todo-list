"use client";

import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useTodoStore } from "../../store";

import { useRouter } from "next/navigation";

export default function Todo() {
  const initializeTodos = useTodoStore((state) => state.initializeTodos);
  const router = useRouter();
  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex-shrink-0">
        <div className="flex w-full justify-between font-bold pb-6  backdrop-blur-2xl  text-3xl tracking-widest items-center max-md:pr-8 pr-14 md:pl-2">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.replace("/");
            }}
          >
            <IoMdArrowRoundBack />
          </div>
          <p> LIST OF TODO</p>
        </div>
      </header>

      <div
        className="overflow-y-auto h-[77%] max-md:h-[71%] scrollbar-hidden mt-4 rounded-lg"
        style={{ scrollbarWidth: "none" }}
      >
        {todos.map((todo, index) => {
          return (
            <div
              className="my-4 bg-gradient-to-r from-sky-400  to-blue-500 rounded-lg  shadow-lg p-4"
              key={index}
            >
              <div className="text-white font-semibold justify-between flex">
                <div>{todo.title}</div>
                <div className="font-normal">{todo.createdAt}</div>
              </div>
              <div className="text-gray-200 h-16">{todo.Description}</div>
            </div>
          );
        })}
      </div>

      <footer className="flex-grow flex items-end rounded ">
        <button
          className="flex w-full items-end justify-center border-t font-semibold text-white text-lg p-4 bg-blue-500 rounded-xl"
          onClick={() => {
            router.replace("/todo/add");
          }}
        >
          Add Project
        </button>
      </footer>
    </div>
  );
}
