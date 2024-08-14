"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full w-full">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-blue-300">
        {" "}
        <div className="absolute top-0 left-0 w-[390px] h-full z-20">
          <Image src="/todo.png" layout="fill" alt="Todo Image" />{" "}
        </div>{" "}
      </div>

      <div className="flex-grow z-10 items-end flex w-full justify-center  mb-20 ">
        <div className="text-center ">
          {" "}
          <div className="text-3xl font-sans font-semibold mb-16">
            Task Management
          </div>
          <div className="text-lg font-sans font-semibold text-zinc-500 mx-4">
            This productive tool is designed to help manage tasks and
            responsibilities, boosting efficiency and organization
          </div>
        </div>
      </div>
      <footer className="flex items-end rounded z-10">
        <button
          className="flex w-full items-end cursor-pointer justify-center border-t font-semibold text-white text-lg p-4 bg-blue-500 rounded-xl"
          onClick={() => {
            router.replace(`/todo`);
          }}
        >
          <p> Let&apos;s Start</p>
        </button>
      </footer>
    </div>
  );
}
