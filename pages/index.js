import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Store</title>
      </Head>

      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <a href="./">Store</a>
          </h1>

          <div class={styles.links}>
          <div>
            <a href="\produtos">Produtos</a>
            <a href="\contato">Contato</a>
          </div>
        </div>
        </div>
        <div className={styles.content}>
        <h2>
          Página Inicial
        </h2>
        <div className={styles.info}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ex mollis, accumsan ligula eu, tristique lectus. 
        Aenean porta congue arcu, faucibus rutrum justo feugiat eget. Donec convallis velit nibh, mattis dignissim tortor feugiat eu. 
        Nam vitae odio imperdiet, pulvinar mi in, mollis tellus. Sed nisi elit, commodo a imperdiet non, efficitur et nunc. 
        Vivamus quis mi vehicula, feugiat turpis in, rhoncus lacus. Etiam orci justo, tempus non nunc eget, volutpat tristique velit.
        </p>
        <ul>
          <li>In bibendum neque in felis molestie, ac facilisis mi lobortis.</li>
          <li>Donec vitae lectus aliquet, suscipit leo suscipit, congue eros.</li>
          <li>Vivamus vestibulum purus at mi tincidunt laoreet.</li>
          <li>Donec sit amet dolor quis turpis malesuada facilisis.</li>
        </ul>
        <p>
        Phasellus molestie ac augue eget accumsan. Fusce interdum auctor mauris, eget efficitur libero scelerisque non. 
        Aenean ultricies rutrum ipsum, nec pharetra urna congue ut. Proin vitae feugiat ex. Maecenas fringilla ullamcorper tellus, in tempus erat facilisis quis. 
        Sed vel dapibus metus. Suspendisse aliquet maximus nisi, ut suscipit massa finibus tincidunt. 
        Vivamus eleifend libero vel ante congue, vitae rutrum mi imperdiet. Vivamus commodo magna eu lorem egestas placerat.
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
