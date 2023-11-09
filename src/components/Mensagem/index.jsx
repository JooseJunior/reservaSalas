import styles from "./styles.module.css"
import classNames from "classnames";

export default function Mensagem({texto, tipo, ativo}){

    const classes = classNames({
        [styles.caixa]: true,
        [styles.success]: tipo === "success" ? true : false,
        [styles.info]: tipo === "info" ? true : false,
        [styles.error]: tipo === "error" ? true : false,
        [styles.warning]: tipo === "warning" ? true : false,
      });

    return(
        <>
        {ativo == "true" ? (
            <>
                <div className={styles.container}>
                    <div className={classes}>
                        <p>{texto}</p>
                    </div>
                </div>
            </>
        ):(
            <>
            </>
        )}
        </>
    )
}