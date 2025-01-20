import {FC, useState} from "react";
import styles from './AuthPage.module.scss';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import {SpriteIcon} from "../../components/UI/SpriteIcon/SpriteIcon";

const accounts = [
    {
        email: 'test1@test.com',
        password: 'test1'
    },
    {
        email: 'test2@test.com',
        password: 'test2'
    },
    {
        email: 'test3@test.com',
        password: 'test3'
    },
];

const AuthPage: FC = () => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const validateSignInInfo = () => {
        const account = accounts.find((account) => account.email === signInEmail);

        if (account && account.password === signInPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.reload();
        } else {
            alert('Аккаунт не найден. Пожалуйста, попробуйте еще раз');
            setSignInEmail('');
            setSignInPassword('');   
        }
    };

    return (
        <PageWrapper>
            <div className={styles.authPage}>
                <h1 className={styles.mainTitle}>
                    <SpriteIcon iconId={'pen'} width={40} height={40}/>
                    Developer Notes
                </h1>
                <div className={styles.content}>
                    <div className={styles.signIn}>
                        <h2>Вход</h2>
                        <div className={styles.inputContainer}>
                            <span>Почта</span>
                            <input value={signInEmail} onChange={(e) => { setSignInEmail(e.target.value) }} type="email" autoComplete={'off'} placeholder={'example@email.com'}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <span>Пароль</span>
                            <input value={signInPassword} onChange={(e) => { setSignInPassword(e.target.value) }} type="password" autoComplete={'off'} placeholder={'надежный пароль'}/>
                        </div>
                        <button onClick={validateSignInInfo}>
                        Войти
                        </button>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.signUp}>
                        <h2>Нет аккаунта? Зарегестрируйтесь сейчас</h2>
                        <div className={styles.inputContainer}>
                            <span>Почта</span>
                            <input type="email" autoComplete={'off'} placeholder={'example@email.com'}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <span>Пароль</span>
                            <input type="password" autoComplete={'off'} placeholder={'надежный пароль'}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <span>Подтвердите пароль</span>
                            <input type="password" autoComplete={'off'} placeholder={'надежный пароль'}/>
                        </div>
                        <button onClick={() => {
                            localStorage.setItem('isLoggedIn', 'true');
                        }}>
                            Создать Аккаунт
                        </button>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default AuthPage;
