import { FETCH_POSTS, SELECT_POST } from "../constants";

const defaultState = {
    posts: [ 
        { title: "Prova", body: "Questa è una prova"},
        { title: "Demo", body: "Questa è una demo"}
    ],
    selected: null
}

export const postsReducer = (state = defaultState, action) => {

    switch(action.type) {

        case FETCH_POSTS:
            return { ...state, posts: action.payload };

        case SELECT_POST:
            return { ...state, selected: action.payload };
        
        default:
            return state;
    }
}