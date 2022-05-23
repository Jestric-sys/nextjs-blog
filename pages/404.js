import Head from 'next/head';
import utilStyle from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <h1 className={utilStyle.headingXl}>404 - Page Not Found</h1>
        </>
    );
};