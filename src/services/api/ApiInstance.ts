import axios, { CreateAxiosDefaults } from "axios";


const config :CreateAxiosDefaults ={
    baseURL:"https://localhost:44368/api/"
}
export const ApiInstance = axios.create(config);