import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import mypic from "../asset/logoHiquma.png";
import mypic2 from "../asset/construction.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hiquma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src={mypic}
          alt="Picture of the author"
          width="350px"
          height="200px"
        />

        <Image
          src={mypic2}
          alt="Picture of the author"
          width="430px"
          height="220px"
        />
        <h2 className="description">Website is under construction</h2>

        <h2 className="description">Contact</h2>
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
