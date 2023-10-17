export const getAllMerchant = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(`${process.env.REACT_APP_VOUCHER_API}/merchant`, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.log("error", error));
};

export const addMerchant = (obj) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/merchant/api/insert`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const editMerchant = (obj) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/merchant/api/${obj?.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

export const deleteMerchant = (id, obj) => {
  var requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(
    `${process.env.REACT_APP_VOUCHER_API}/merchant/api/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
