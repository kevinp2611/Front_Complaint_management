import { DELETE, GET, POST, PUT } from "../../index";
import { LOGIN_URL, LOGOUT_URL } from "../../Constant/Auth/auth.constant";

export const POST_LOGIN_REQUEST = async (data) => {
  return POST(LOGIN_URL, data);
};
export const POST_LOGOUT_REQUEST = async (data) => {
  return POST(LOGOUT_URL, data);
};
