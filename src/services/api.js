import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

const api = axios.create({
  baseURL: "https://jsonbox.io/box_8bad98a0eb85d0d84072"
});

loadProgressBar({}, api);

export default api;
