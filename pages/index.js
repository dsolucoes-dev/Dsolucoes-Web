import React from "react";
import Footer from "../components/Footer";
import Head from 'next/head'


import { Landing } from "../components/Landing";
import Main from "../components/Main";

export default function Home() {
  return (

    <div className="page-home ">
      <Head>
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Dsoluções</title>
        <meta name="description" content="Convertendo suas ideias em soluções." />
        <meta name="robots" content="index" />
        <meta name="author" content="Dsoluções" />
        <meta name="keywords" content="Dsolucoes, programação, sistemas, criar sistemas, criar sites, varjota, ceara, empresa de software, software, varjota" />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="dsolucoes.dev.br" />
        <meta property="og:title" content="Dsoluções" />
        <meta property="og:image" content="https://i.ibb.co/qBK2DV8/site.png" />
        <meta property="og:description" content="Convertendo suas ideias em soluções." />

        <meta property="article:author" content="" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Dsoluções" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:description" content="Convertendo suas ideias em soluções." />

      </Head>
      <div className="content lg:mx-20">
        <Landing />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
