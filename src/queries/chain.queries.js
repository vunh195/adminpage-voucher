export const getAllChain = () => {
  var requestOptions = {
    method: "GET",
  };
  return fetch("http://localhost:8082/chain", requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
