import Layout from '../components/myLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const ShowLink = show => (
    <li key={show.id}>
        <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
        </Link>
        <style jsx> {`
            a {
                color: green;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

const Blog = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
               ShowLink(show)
            ))}
        </ul>
    </Layout>
)

Blog.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  }
  
export default Blog;