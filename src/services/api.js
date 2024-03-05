import axios from "axios";

const api = axios.create({
    baseURL: "https://api.sampleapis.com/coffee/hot",
    baseURL: "https://api.sampleapis.com/coffee/iced"
});

export default api;