import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f72c12a50e9249a4999caf11c067bd95",
  },
});
