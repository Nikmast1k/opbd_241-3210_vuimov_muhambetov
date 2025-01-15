export interface PostInfo {
    created_at: string;
    id: string;
    title: string;
    content: string;
    category: {
        id: string;
        title: string;
    };
    image: string;
}