import {publicAPI} from "./API";

export const PostsService = {
    getAll: () => {
        return publicAPI.get('/api/v1/posts')
    },
    getOne: (id: string) => {
        return publicAPI.get(`/api/v1/posts/${id}`)
    }
}