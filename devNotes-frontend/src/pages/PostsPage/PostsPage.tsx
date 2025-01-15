import {FC, useEffect} from "react";
import styles from './PostsPage.module.scss';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import Post from "./Post/Post";
import {useAPI} from "../../hooks/useAPI";
import {PostsService} from "../../API/PostsService";
import PageLoading from "../../components/UI/PageLoading/PageLoading";
import { type PostInfo } from '../../types/Post'

const PostsPage: FC = () => {
    const [isLoading, posts, getPosts] = useAPI<PostInfo[]>(
        () => PostsService.getAll()
    );

    useEffect(() => {
        getPosts();
    }, []);

    if (isLoading) {
        return <PageLoading />
    }

    return (
        <PageWrapper>
            <Header />
            <div className={styles.postsPage}>
                <h1 className={styles.pageTitle}>
                    Статьи
                </h1>
                <div className={styles.postsContainer}>
                    {
                        (posts ?? []).map(post => (
                            <Post
                                id={post.id}
                                title={post.title}
                                text={post.content}
                                category={post.category.title}
                                createdAt={new Date(post.created_at)}
                            />
                        ))
                    }
                </div>
            </div>
        </PageWrapper>
    );
};

export default PostsPage;