import axios from "axios";
import cookie from "../helpers/cookie";
import AppConfig from "@/config/app-config";

const api = (isFormData?: boolean) => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${cookie.get(AppConfig.ACCESS_TOKEN_KEY)}`,
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    },
    validateStatus: () => true,
  });
};
export default api;
