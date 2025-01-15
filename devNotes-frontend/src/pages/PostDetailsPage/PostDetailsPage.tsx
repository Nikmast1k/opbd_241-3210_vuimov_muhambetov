import {FC, useEffect} from "react";
import styles from './PostDetailsPage.module.scss';
import {useNavigate, useParams} from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import {SpriteIcon} from "../../components/UI/SpriteIcon/SpriteIcon";
import {useAPI} from "../../hooks/useAPI";
import {PostInfo} from "../../types/Post";
import {PostsService} from "../../API/PostsService";
import PageLoading from "../../components/UI/PageLoading/PageLoading";
import {format} from "date-fns";

const PostDetailsPage: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [getPostLoading, post, getPost] = useAPI<PostInfo>(
        () => PostsService.getOne(id ?? '')
    );

    useEffect(() => {
        getPost();
    }, []);

    if (getPostLoading || !post) {
        return <PageLoading />
    }

    return (
        <PageWrapper>
            <Header />
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <button onClick={() => { navigate('/posts') }}>
                        <SpriteIcon iconId={'arrow'} width={20} height={20} />
                    </button>
                    <span>
                        {format(new Date(post.created_at), 'MMM dd, yyyy')}
                    </span>
                </div>
                <h2 className={styles.postTitle}>
                    {post.title}
                    <span>{' ' + '#' + post.category.title}</span>
                </h2>
                <div className={styles.imageContainer}>
                    <img src={'http://localhost:8000' + post.image} alt=""/>
                </div>
                <p className={styles.postText}>
                    {post.content}
                </p>
            </div>
        </PageWrapper>
    );
};

export default PostDetailsPage;