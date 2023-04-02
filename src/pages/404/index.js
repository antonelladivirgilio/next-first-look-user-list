import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function NotFound(props) {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <div>
                <p>Ooops</p>
                <p>Esta página no existe</p>
            </div>
        </>
    );
}