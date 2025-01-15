import {FC} from "react";
import {useNavigate} from "react-router-dom";
import styles from './Post.module.scss';
import {format} from "date-fns";

interface PostProps {
    id: string;
    title: string;
    text: string;
    category: string;
    createdAt: Date;
}

const Post: FC<PostProps> = ({ id, title, text, createdAt, category }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.post} onClick={() => { navigate(`${id}`) }}>
            <div className={styles.infoContainer}>
                <div className={styles.tags}>
                    <span>
                        #{category}
                    </span>
                        <span>
                        {format(createdAt, 'MMM dd, yyyy')}
                    </span>
                </div>
                <div className={styles.mainText}>
                    <h4>{title}</h4>
                    <span>
                        {
                            text.length > 100
                               ? `${text.slice(0, 200)}...`
                                : text
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Post;