import Button from "../Button"
import styles from "./styles.module.css"
import Link from 'next/link'

export default function Card({id, imagem, titulo, descricao, local, dataInicial, dataFinal}){
    return(
        <>
        <div className={styles.card}>
            <div>

                <div>
                    <img className={styles.imagem} src={imagem}/>
                </div>

                <div className={styles.info}>
                    <h2>{titulo}</h2>
                    <div className={styles.barra}/>
                    {/* <h3>{descricao}</h3> */}
                    <h4>Local: {local}</h4>
                    <h4>Data Inicio: {dataInicial}</h4>
                    <h4>Data Final: {dataFinal}</h4>
                </div>

                <div>
                    <Link href={`/eventos/${id}`}>
                        <Button >Visualizar</Button>
                    </Link>
                </div>

            </div>
        </div>
        </>
    )
}