import axios from "axios";

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};
export const GET = async (url) => {
  return await axios.get(url);
};
export const POST = async (url, data) => {
  return await axios.post(url, data, { headers: header });
};
export const PUT = async (url, data) => {
  return await axios.put(url, data);
};
export const DELETE = async (url) => {
  return await axios.delete(url);
};
