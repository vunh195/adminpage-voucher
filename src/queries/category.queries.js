export const getAllCategory = () => {
  var requestOptions = {
    method: "GET",
  };
  return fetch("http://localhost:8082/category", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
