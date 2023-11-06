import styles from "./styles.module.css"

export default function TextArea({children, ...props}){
    return(
        <>
        <div>
            <textarea className={styles.textarea} {...props}>{children}</textarea>
        </div>
        </>
    )
}