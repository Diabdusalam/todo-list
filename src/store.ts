import create from "zustand";
import todosData from "./app/database/todos.json";

interface Todo {
  title: string;
  Description: string;
  createdAt: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  initializeTodos: () => void;
}

const loadTodos = () => {
  if (typeof window !== "undefined") {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : todosData;
  }
  return todosData;
};

const saveTodos = (todos: Todo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: loadTodos(),
  addTodo: (todo) =>
    set((state) => {
      const newTodo = {
        ...todo,
        createdAt: new Date().toISOString().split("T")[0],
      };
      const newTodos = [...state.todos, newTodo];
      saveTodos(newTodos);
      return { todos: newTodos };
    }),
  initializeTodos: () => set({ todos: loadTodos() }),
}));
