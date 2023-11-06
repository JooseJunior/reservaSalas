import styles from "./styles.module.css"

export default function Input({ ...props}){
    return(
        <>
        <div>
        <input className={styles.input}{...props}/>
        </div>
        </>
    )
}