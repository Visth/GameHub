import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1bee90c54f849fda52998ffc87fe986",
  },
});
