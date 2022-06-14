import axios from "axios";

export const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPosts = async () => {
    const response = await request.get("/posts");
    return response.data;
}