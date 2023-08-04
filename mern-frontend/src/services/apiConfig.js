import axios from 'axios';

let apiUrl;

const apiUrls = {
  production: "https://games-api112-05efbc6a4ce4.herokuapp.com/api",
  development: "https://games-api112-05efbc6a4ce4.herokuapp.com/api"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl
})

export default api;