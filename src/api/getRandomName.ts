import axios from "axios";

export const getRandomName = async () => {
  // const response = await fetch(
  //   "https://api.randomdatatools.ru/?unescaped=false&params=FirstName"
  // );
  // const data = await response.json();

  const { data } = await axios<{ FirstName: string }>(
    "https://api.randomdatatools.ru/?unescaped=false&params=FirstName"
  );

  return data.FirstName;
};
