import axios from "axios"

const host =
window.location.hostname ==="localhost"? `${"http://localhost:5000"}/`:"api";

const apiClient = axios.create({
    baseURL: host,
})

export default apiClient;