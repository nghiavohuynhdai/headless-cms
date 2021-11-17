import { getPostAPI } from "../../../lib/api";
import Link from "next/link";

export default function Post(data) {
  const post = data.post;

  return (
    <div>
      <h1><Link href='/blog'><a>BENIT</a></Link></h1>
      <h2>{post.title}</h2>
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
}

export async function getStaticProps(context) {
  const json = await getPostAPI(context);
  return {
    props: {
      post: json.data.post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://benitcoin.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query AllPostsQuery {
              posts {
                nodes {
                  slug
                }
              }
              
            }
        `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}
