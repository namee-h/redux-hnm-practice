import axios from "axios"

const host =
window.location.hostname ==="localhost"? "http://localhost:5000":"https://react-hnm-project-hans.netlify.app/";

const apiClient = axios.create({
    baseURL: host,
})

export default apiClient;