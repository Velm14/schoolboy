import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://94.131.246.109:5555/v1";

export const requestAPI = async <T>(
  url: AxiosRequestConfig["url"],
  method: AxiosRequestConfig["method"],
  options?: Omit<AxiosRequestConfig, "url" | "method">,
): Promise<T> => {
  const response = await axios.request({
    method,
    url: url,
    baseURL: BASE_URL,
    ...(options || {}),
  });

  return response.data;
};
