export const getAllChain = () => {
  var requestOptions = {
    method: "GET",
  };
  return fetch("http://localhost:8082/chain", requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.log("error", error));
};
export const addChain = (obj) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch("http://localhost:8082/chain/api/insert", requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const editChain = (obj) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/chain/api/${obj?.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const deleteChain = (id, obj) => {
  var requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/chain/api/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
