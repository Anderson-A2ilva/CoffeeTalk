import axios from "axios";

const hotCoffeeApi = axios.create({
    baseURL: "https://api.sampleapis.com/coffee/hot",
});
const icedCoffeeApi = axios.create({
    baseURL: "https://api.sampleapis.com/coffee/iced"
});

export { hotCoffeeApi, icedCoffeeApi };