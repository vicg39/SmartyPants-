import {
    SET_RECENT_POSTS
} from '../actions/types';

const INIT_STATE = {
    post: [],
    recentPost: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            
            return [...state, recentPosts, actions.payload]
        default:
            return state
    }
}