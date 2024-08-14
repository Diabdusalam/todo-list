"use client";
import Image from "next/image";
import { useState } from "react";
import todosData from "../../../app/database/todos.json";
import { useTodoStore } from "../../../store";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

interface Todo {
  title: string;
  Description: string;
  createdAt: string;
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const router = useRouter();

  const handleAddTodo = () => {
    if (title && description) {
      addTodo({ title, Description: description, createdAt: " " });
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="flex flex-col h-full w-full">
      {/* <header className="flex-shrink-0"> */}
      <div
        onClick={() => {
          router.replace("/todo");
        }}
        className="flex  font-bold pb-6  backdrop-blur-2xl  text-3xl tracking-widest items-center "
      >
        <IoMdArrowRoundBack className="cursor-pointer" />
      </div>
      {/* </header> */}
      <div className="absolute bg-gradient-to-b from-sky-400  to-blue-500 h-[90%] rounded-t-xl bottom-0 left-0 z-0 w-full p-10 flex flex-col gap-y-10 ">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border-solid border-white border-2 rounded-lg outline-none p-4 text-white text-lg font-semibold placeholder-zinc-500"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="
    bg-transparent
    border-solid
    border-white
    border-2
    rounded-lg
    outline-none
    p-4
    text-white
    text-lg
    placeholder-zinc-500
    h-2/3
    resize-none
  "
        ></textarea>
      </div>
      <footer className="flex-grow flex items-end rounded">
        <button
          onClick={() => {
            if (handleAddTodo) {
              handleAddTodo();
            }
            router.replace("/todo");
          }}
          className="flex w-full items-end justify-center border-t font-semibold text-black text-lg p-4 bg-white rounded-xl z-10"
        >
          Add Todo
        </button>
      </footer>
    </div>
  );
}
