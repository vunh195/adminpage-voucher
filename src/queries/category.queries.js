export const getAllCategory = () => {
  var requestOptions = {
    method: "GET",
  };
  return fetch(`${process.env.REACT_APP_VOUCHER_API}/category`, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.log("error", error));
};
export const addcategory = (obj) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(`${process.env.REACT_APP_VOUCHER_API}/category/api/insert`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const editcategory = (obj) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/category/api/${obj?.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const deletecategory = (id, obj) => {
  var requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/category/api/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
