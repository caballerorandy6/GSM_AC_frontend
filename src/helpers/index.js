export const generateId = () => {
  const random = Math.random().toString(32).substring(2);
  const date = Date.now().toString(32);
  return random + date;
};

export const formatDate = (date) => {
  const newDate = new Date(date.split("T")[0].split("-"));

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("en-EN", options);
};
