import React, {FC} from "react";
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;