import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-38cff/us-central1/api",
    responseType: "json", // Default for APIs; change to 'text' or 'arraybuffer' if needed
});

export { axiosInstance };