import React from "react";
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Contato(){
    return(
      <div className={styles.container}>
        <Head>
          <title>Contato</title>
        </Head>

        <main>
          <div className={styles.header}>
          <h1 className={styles.title}>
          <a
            href="./">Store</a>
          </h1>

          <div class={styles.links}>
            <div>
              <a href="/produtos">Produtos</a>
              <a href="/contato">Contato</a>
            </div>
          </div>
          </div>
          <div className={styles.content}>
          <h2>
            Contato
          </h2>
          <div className={styles.contatos}>
              <p>
                  <a href="https://www.facebook.com/store">
                      Facebook
                  </a>
              </p>
              <p>
                  <a href="https://www.instagram.com/store">
                      Instagram
                  </a>
              </p>
              <p>
                  <a href="https://twitter.com/store">
                      Twitter
                  </a>
              </p>
              <p>
              <a href="mailto:contato@store.com">
                  contato@store.com
              </a>
              </p>
              <p>
                  <a href="tel:67992927123">
                      (67) 99292-7123
                  </a>
              </p>
              </div>
              </div>
          </main>
          <footer className={styles.footer}>
          <p>IFMS Dourados — Trabalho Final de Frameworks 2</p>
        </footer>
      </div>
    )
}