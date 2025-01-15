import {FC, useEffect, useState} from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from './HomePage.module.scss';
import {SpriteIcon} from "../../components/UI/SpriteIcon/SpriteIcon";
import {useNavigate} from "react-router-dom";

const words = ['Frontend', 'Backend', 'Mobile dev', 'Game dev', 'Dev Ops', 'mospolytech'];

const HomePage: FC = () => {
    const navigate = useNavigate();

    const [currentDimText, setCurrentDimText] = useState('Frontend');
    const [pageOpacity, setPageOpacity] = useState(0);

    const handleTextChange = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCurrentDimText(words[randomIndex]);
    };

    useEffect(() => {
        const interval = setInterval(handleTextChange, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => { setPageOpacity(1) }, 300);

        return () => clearTimeout(timeout);
    }, [])

    return (
        <PageWrapper>
            <div className={styles.homePage} style={{ opacity: pageOpacity }}>
                <h1 className={styles.mainTitle}>
                    <SpriteIcon iconId={'pen'} width={40} height={40} />
                    Developer Notes
                </h1>
                <div className={styles.content}>
                    <p className={styles.description}>
                        Читай, учись, создавай
                    </p>
                    <p className={styles.descriptionSecondary}>
                        Читайте статьи, делитесь опытом и улучшайте свои навыки в мире разработки.
                        Погрузитесь в увлекательный процесс обучения и роста с <span> Developer Notes </span>
                    </p>
                    <span className={styles.dimmingText}>
                        {currentDimText}
                    </span>
                    <div className={styles.buttons}>
                        <button className={styles.buttonSecondary} onClick={() => { navigate('posts') }}>
                            Читать Блог
                        </button>
                        <button className={styles.buttonPrimary} onClick={() => { window.location.href = 'http://localhost:8000/admin/posts/post/add/' }}>
                            Создать Пост
                        </button>
                    </div>
                </div>
                <footer>
                    Copyright ©2024-2025 developernotes.com All rights reserved
                </footer>
            </div>
        </PageWrapper>
    );
};

export default HomePage;