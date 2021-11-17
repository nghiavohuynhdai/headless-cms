import Link from "next/link";
import { getHomePageAPI } from "../../lib/api";
import { makeStyles } from "@material-ui/core/styles";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import logo from "../../assets/img/New-pte-magic-logo-1.png";
import Header from "../../components/Header/Header";
import HeaderLinksPTE from "../../components/Header/HeaderLinksPTE";
import Head from "next/head";
import PTEFooter from "../../components/Footer/PTEFooter";
import { getBlogsAPI } from "../../lib/api";
import Section1 from "./blogs-section/Section1";

const useStyles = makeStyles({
  ...teamsStyle,
  root: {
    minHeight: "100vh",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  headSection: {
    position: "relative",
    backgroundImage:
      "url(https://react-next-landing.redq.io/_next/static/images/banner-texture-25e9140dbeecfc0ee999031279bb6a2c.png), linear-gradient(35deg, #faf2b5 0%, #fadb06 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    paddingTop: 150,
  },
});

export default function HomePage({ posts }) {
  // const data = JSON.parse(posts[0].blocksJSON);
  const classes = useStyles();
  console.log(posts);

  const latestPosts = posts.length > 5 ? posts.slice(5) : posts

  return (
    <div className={classes.root}>
      {/*  <h1><Link href="/"><a>HomePage</a></Link></h1>
      <h2 style={{color: "red"}}>
        <Link href="/blog">
          <a>BENIT</a>
        </Link>
      </h2> */}
      {/* <div>
        <article dangerouslySetInnerHTML={{ __html: data[2].saveContent }}></article>
        {posts.nodes.map((post) => {
          return (
            <div key={post.slug}>
              <h3>
                <Link href={`/blog/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h3>
              {post.featuredImage && (
                <img
                  width={400}
                  heigth={300}
                  src={post.featuredImage.node.sourceUrl}
                />
              )}
            </div>
          );
        })}
      </div> */}
      <div className={classes.headSection}>
        <Head>
          <title>
            Real PTE Practice Test Questions Free and AI - PTE Magic
          </title>
        </Head>
        <Header
          brand={<img src={logo} alt={"logo"} />}
          color="transparent"
          links={<HeaderLinksPTE />}
          fixed
          changeColorOnScroll={{
            height: 0,
            color: "white",
          }}
        />
      </div>
      <section>
        <Section1 data={latestPosts} />
      </section>
      <PTEFooter />
    </div>
  );
}

export async function getStaticProps() {
  const json = await getBlogsAPI();

  return {
    props: {
      posts: json.data.posts.nodes,
    },
    revalidate: 10,
  };
}
