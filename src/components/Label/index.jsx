import styles from "./styles.module.css"

export default function Label({children, ...props}){
    return(
        <>
        <div>
            <label className={styles.label} {...props}>{children}</label>
        </div>
        </>
    )
}