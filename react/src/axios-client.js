import axios from "axios";


const axiosClient = axios.create({
  baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {

  const token = localStorage.getItem("ACCESS_TOKEN");
  
  config.headers.Authorization = `Bearer ${token}`;
  
  return config;
});


axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {

  const {response} = error;

  try {
    
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
    }
    
  } catch (error) {
    debugger;
    console.error(error);
  }

  throw error;
});

export default axiosClient;