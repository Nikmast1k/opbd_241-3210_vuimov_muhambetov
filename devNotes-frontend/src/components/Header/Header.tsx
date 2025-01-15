import {FC} from "react";
import styles from './Header.module.scss';
import {useNavigate} from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <button onClick={() => { navigate('/') }}>
                <h2>Developer Notes</h2>
            </button>
        </header>
    );
};

export default Header;