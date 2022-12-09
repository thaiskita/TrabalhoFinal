import React from "react";
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import axios from "axios";

function Product({product = {}}){
    return <div>
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
        <div className={styles.produto}>
            <h2>{product.title}</h2>
            <img src={product.image} width="300"></img>
            <h3>R${product.price}</h3>
            <p>{product.description}</p>
        </div>
        </div>
        </main>
        <footer className={styles.footer}>
        <p>IFMS Dourados — Trabalho Final de Frameworks 2</p>
      </footer>
        </div>
    </div>
    
}

export async function getStaticProps(context){
    const response = await axios.get (
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const product = await response.data;
    return {
        props: {product}
    }
}

export async function getStaticPaths() {
    const response = await axios.get (
        'https://fakestoreapi.com/products'
    );
    const products = await response.data;
    const paths = products.map((product) => {
        return {params:{id:String(product.id)}};
    });
    return {
        paths,
        fallback: true,
    };
}

export default Product;