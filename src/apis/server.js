import axios from "axios";

const server = axios.create({
  baseURL: "https://api.github.com",
});

export default server;
