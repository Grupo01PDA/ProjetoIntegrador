import axios from "axios"

const banco = axios.create({
  baseURL: "http://localhost:3000"
})

export default banco;