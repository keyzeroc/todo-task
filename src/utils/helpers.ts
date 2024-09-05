export const localizeISOString = (isoString: string) => {
  const dateCreated = new Date(isoString);
  return String(dateCreated.getHours()).padStart(2, "0") +
    ":" +
    String(dateCreated.getMinutes()).padStart(2, "0") +
    ":" +
    String(dateCreated.getSeconds()).padStart(2, "0");
}