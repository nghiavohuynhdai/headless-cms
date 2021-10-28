import React, { Component } from "react";
import Router from "next/router";
  import Home from "./home";
import { getHomePageAPI } from "../lib/api";

export default function Index({ posts }) {
  // componentDidMount = () => {
  //   Router.push("/home");
  // };

  let i = 0;
  while (posts[i].title != "Landing Page") {
    i++;
  }
  const blocksJson = JSON.parse(posts[i].blocksJSON);

  return <Home data={blocksJson} />;
}

export async function getStaticProps() {
  const json = await getHomePageAPI();

  return {
    props: {
      posts: json.data.posts.nodes,
    },
    // revalidate: 10,
  };
}
