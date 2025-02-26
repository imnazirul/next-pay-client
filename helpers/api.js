import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:5500/api/v1'
  });
  
  axiosApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  export async function get(url, params = {}, config = {}) {
    const response = await axiosApi.get(url, { ...config, params });
    console.log("🚀 ~ get ~ response:", response.data)
    return response.data;
  }
  
  const updateRequest = (url, data) => {
    axiosApi.defaults.headers.common["Content-Type"] = "application/json";
    let variables = url.match(/:[a-zA-Z]+/g);
    if (variables?.length) {
      variables.forEach((variable) => {
        url = url.replace(variable, data[variable.replace(":", "")]);
        delete data[variable.replace(":", "")];
      });
    }
    return { url, data };
  };
  
  export async function post(url, data, config = {}) {
    let { url: newUrl, data: newData } = updateRequest(url, data);
    console.log("🚀 ~ post ~ newUrl:", newUrl);
    console.log("🚀 ~ post ~ newData:", newData);
    return axiosApi
      .post(newUrl, newData, { ...config })
      .then((response) => {
        console.log("🚀 ~ post ~ response:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("🚀 ~ post ~ error:", error?.response);
        throw error?.response?.data || "Something Went Wrong";
      });
  }
  
  export async function put(url, data, config = {}) {
    let { url: newUrl, data: newData } = updateRequest(url, data);
    return axiosApi
      .put(newUrl, newData, { ...config })
      .then((response) => response.data);
  }
  
  export async function patch(url, data, config = {}) {
    let { url: newUrl, data: newData } = updateRequest(url, data);
    return axiosApi
      .patch(newUrl, newData, { ...config })
      .then((response) => response.data);
  }
  
  export async function del(url, config = {}) {
    return await axiosApi
      .delete(url, { ...config })
      .then((response) => response.data);
  }
  
  
