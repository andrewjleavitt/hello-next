import Layout from '../components/myLayout';
import { useRouter } from 'next/router';

const Content = () => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.title}</h1>
            <p>This is the blog content.</p>
        </div>
    );
}

const Page = () => {
    

    return (
        <Layout>
            <Content />
        </Layout>
    );
}

export default Page;