import { TodoType } from "../types/Todo";

export const localizeISOString = (isoString: string) => {
  const dateCreated = new Date(isoString);
  return String(dateCreated.getHours()).padStart(2, "0") +
    ":" +
    String(dateCreated.getMinutes()).padStart(2, "0") +
    ":" +
    String(dateCreated.getSeconds()).padStart(2, "0");
}

export const sortByDateDescending = (todos: TodoType[]): TodoType[] => {
  return todos.sort((a, b) => b.date - a.date);
};

export const sortByStatusDescending = (todos: TodoType[]): TodoType[] => {
  return todos.sort((a, b) => b.status - a.status);
};