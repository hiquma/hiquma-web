import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hiquma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hiquma " />
        <p className="description">High Quality Marine</p>

        <p className="description">Website is under construction</p>
        <p className="description">
          <b>Email :</b> muhammet@hiquma.net{" "}
        </p>
        <p className="description">
          <b>Phone:</b> +90 532 747 4995
        </p>
        <p className="description">
          <b>Wechat:</b> cn13826896303
        </p>
      </main>

      <Footer />
    </div>
  );
}
