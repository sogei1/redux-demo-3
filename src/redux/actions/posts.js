import { request } from "../../requests/requests"
import { FETCH_POSTS, SELECT_POST } from "../constants"

export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        payload: post
    }
}

export const fetchPosts = () => async dispatch => {
    const response = await request.get("/posts");
    dispatch({ type: FETCH_POSTS, payload: response.data })
}