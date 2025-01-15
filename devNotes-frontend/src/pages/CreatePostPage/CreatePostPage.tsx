import {FC} from "react";
import styles from './CreatePostPage.module.scss';
import {useNavigate} from "react-router-dom";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";

const CreatePostPage: FC = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {

    };

    return (
        <PageWrapper>
            <Header />
            <div className={styles.createPostPage}>
                <form action="" className={styles.form}>
                    <div className={styles.titledInput}>
                        <span>
                            Заголовок
                        </span>
                        <input type="text" name="title" placeholder={'Заголовок'} required/>
                    </div>
                    <div className={styles.titledInput}>
                        <span>
                            Категория
                        </span>
                        <input type="text" name="category" placeholder={'Категория'} required/>
                    </div>
                    <div className={styles.titledInput}>
                        <span>
                            Текст
                        </span>
                        <textarea name="text" placeholder={'Расскажите что-то интересное'} required/>
                    </div>
                    <div className={styles.buttons}>
                        <button>
                            Создать Пост
                        </button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    );
};

export default CreatePostPage;