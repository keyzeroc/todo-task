import { TodoType } from "../types/Todo";

export const localizeISOString = (isoString: string) => {
  const dateCreated = new Date(isoString);
  return String(dateCreated.getHours()).padStart(2, "0") +
    ":" +
    String(dateCreated.getMinutes()).padStart(2, "0") +
    ":" +
    String(dateCreated.getSeconds()).padStart(2, "0");
}

export const sortByDateAscending = (todos: TodoType[]): TodoType[] => {
  return todos.sort((a, b) => a.date - b.date);
};

export const sortByStatusDescending = (todos: TodoType[]): TodoType[] => {
  return todos.sort((a, b) => b.status - a.status);
};