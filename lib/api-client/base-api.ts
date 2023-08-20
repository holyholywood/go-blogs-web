import { postBodyRequestType, responseBodyType } from "./API";
import api from "./api-config";

type env = "local" | "production";

export const getBASEURL = (): string => {
  const url = {
    local: process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL,
    production: process.env.NEXT_PUBLIC_BASE_API_URL_PRODUCTION,
  };
  return url[process.env.NEXT_PUBLIC_APP_ENV as env] as string;
};

class baseAPI {
  private baseURL = getBASEURL();
  private apiInstance = api;

  async get<T>(url: string): Promise<responseBodyType<T>> {
    return (await this.apiInstance().get(this.baseURL + url)).data;
  }

  async post<T>(url: string, body?: postBodyRequestType | FormData): Promise<responseBodyType<T>> {
    return (await this.apiInstance().post(this.baseURL + url, body)).data;
  }
  async postFormData<T>(url: string, body: FormData): Promise<responseBodyType<T>> {
    return (await this.apiInstance(true).post(this.baseURL + url, body)).data;
  }

  async patch<T>(url: string, body?: postBodyRequestType): Promise<responseBodyType<T>> {
    return (await this.apiInstance().patch(this.baseURL + url, body)).data;
  }

  async delete<T>(url: string): Promise<responseBodyType<T>> {
    return (await this.apiInstance().delete(this.baseURL + url)).data;
  }
}

const Fetch = new baseAPI();

export default Fetch;
