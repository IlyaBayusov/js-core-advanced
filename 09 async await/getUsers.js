async function getUsers(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Ошибка ", error);
  }
}

const fakeAPI = "https://jsonplaceholder.typicode.com/users";
const users = getUsers(fakeAPI)
  .then((data) => {
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
