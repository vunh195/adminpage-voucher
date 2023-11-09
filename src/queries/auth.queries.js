import http from "../configs/http";

export const signIn = async (payload) => {
  const rs = await http.post("/account/api/signin", null, {
    params: payload,
  });
  return rs;
};
