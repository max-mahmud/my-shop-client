import axios from "axios";
const local = "http://localhost:5000";
const production = "";
let api_Url = "";
let mode = "dev";

if (mode === "pro") {
  api_Url = production;
} else {
  api_Url = local;
}

const api = axios.create({
  baseURL: `${api_Url}/api`,
  withCredentials: true,
});
export default api;
