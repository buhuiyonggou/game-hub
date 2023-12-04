import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f72c12a50e9249a4999caf11c067bd95",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  // get = async (id: string) => {
  //   return axiosInstance
  //     .get<T>(`${this.endpoint}/${id}`)
  //     .then((res) => res.data);
  // };

  // create = async (data: T) => {
  //   return axiosInstance
  //     .post<T>(this.endpoint, data)
  //     .then((res) => res.data);
  // };

  // update = async (id: string, data: T) => {
  //   return axiosInstance
  //     .put<T>(`${this.endpoint}/${id}`, data)
  //     .then((res) => res.data);
  // };
}

export default APIClient;
