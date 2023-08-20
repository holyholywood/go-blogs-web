import axios from "axios";
import cookie from "../helpers/cookie";

const api = (isFormData?: boolean) => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${cookie.get("tcloth-token")}`,
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    },
    validateStatus: () => true,
  });
};
export default api;
