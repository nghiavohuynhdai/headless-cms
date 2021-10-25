
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import withReduxSaga from 'next-redux-saga'
import { MuiThemeProvider } from "@material-ui/core";

import setupAxiosInterceptors from '../config/axios-interceptor';
import wrapper from '../store/rootStore';

import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-kit-pro.scss?v=1.1.0";
import "assets/css/react-demo.css";
import "animate.css/animate.min.css";

import { theme } from "../theme";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});


setupAxiosInterceptors(() => console.log('error'));
// const store = initStore();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    let comment = document.createComment(``);
    document.insertBefore(comment, document.documentElement);
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <React.Fragment>
        {/* <Head>
          <title>PTE Practice Test Speaking, Writing, Reading and Listening | PTE Magic</title>
        </Head> */}
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(MyApp));
