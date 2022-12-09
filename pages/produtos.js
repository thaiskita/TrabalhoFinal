import React from "react";
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from "next/link";
import axios from "axios";

function Produtos({products}){
    return(
        <div className={styles.container}>
      <Head>
        <title>Produtos</title>
      </Head>

      <main>
        <div className={styles.header}>
        <h1 className={styles.title}>
        <a
          href="./">Store</a>
        </h1>

        <div class={styles.links}>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
        </div>
        </div>
        <div className={styles.content}>
        <h2>
          Produtos
        </h2>
        <div>
          {products.map((product) => (
            <div className={styles.produtos}>
              <Link href='/produto/[id]'as={`/produto/${product.id}`} >
                <img src={product.image} width="200" height="200"></img>
                <p>{product.title}</p>
                <p className={styles.preco}>R${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        </div>
        </main>
        <footer className={styles.footer}>
        <p>IFMS Dourados — Trabalho Final de Frameworks 2</p>
      </footer>
        </div>
    )
}

export async function getStaticProps(context) {
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;
  return {
    props: {products:data}
  }
}

export default Produtos;