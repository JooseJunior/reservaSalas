import styles from "./styles.module.css"

export default function Select({ ...props}){
    return(
        <>
        <div>
            <select className={styles.select}{...props}/>
        </div>
        </>
    )
}