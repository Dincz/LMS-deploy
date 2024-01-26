import axios from "axios";
//backend url its for local 
// const BASE_URL = "http://localhost:5002/api/v1/";

const BASE_URL = "https://lmsbackend-phtd.onrender.com/api/v1/";
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
