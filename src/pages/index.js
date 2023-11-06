import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
import Mensagem from '@/components/Mensagem'
import Label from '@/components/Label'
import TextArea from '@/components/TextArea'
import AppFormulario from '@/components/AppFormulario'
import AppTabela from '@/components/AppTabela'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Reservas</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Cabecalho titulo={"Reserva de Salas"}/>
        
        <body className={styles.body}>

          <div className={styles.bodyFormulario}>
            <AppFormulario />
          </div>

          <div className={styles.bodyTabela}>
            <AppTabela />
          </div>
          
        </body>

        <Rodape/>
      </main>

    </>
  )
}