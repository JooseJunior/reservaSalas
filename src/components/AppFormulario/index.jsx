import Input from "../Input"
import Label from "../Label"
import TextArea from "../TextArea"
import styles from "./styles.module.css"

export default function AppFormulario({}){
    return(
        <>
        <div className={styles.bodyFormulario}>
            
            <div className={styles.bodyFormTitulo}>
                <h3>Reservar sala</h3>
            </div>

            <div className={styles.bodyFormInfo}>
                <div>
                    <Label>Descrição</Label>
                    <TextArea></TextArea>
                </div>
                <div>
                    <Label>Solicitante</Label>
                    <Input></Input>
                </div>
                <div>
                    <Label>Sala</Label>
                    <Input></Input>
                </div>
                <div>
                    <Label>Início</Label>
                    <Input></Input>
                </div>
                <div>
                    <Label>Fim</Label>
                    <Input></Input>
                </div>
            </div>

        </div>
        </>
    )
}