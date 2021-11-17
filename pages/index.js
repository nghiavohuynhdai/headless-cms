import React, { Component } from "react";
import Router from "next/router";
import Home from "./home";
import { getHomePageAPI } from "../lib/api";

export default function Index({ pages }) {
  // componentDidMount = () => {
  //   Router.push("/home");
  // };

  let i = 0;
  while (pages[i].title != "Home Page") {
    i++;
  }
  const blocksJson = JSON.parse(pages[i].blocksJSON);

  return <Home data={blocksJson} />;
}

export async function getStaticProps() {
  const json = await getHomePageAPI();

  return {
    props: {
      pages: json.data.pages.nodes,
    },
    revalidate: 10,
  };
}