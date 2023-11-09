import reservas from "@/pages/reservas"
import Input from "../Input"
import Label from "../Label"
import TextArea from "../TextArea"
import styles from "./styles.module.css"
import Select from "../Select"
import Button from "../Button"
import { useState } from "react"
import { useRouter } from "next/router"
import Mensagem from "../Mensagem"
import axios from 'axios'

export default function AppFormulario({}){
    
    const [reserva, setReserva] = useState({
        descricao:"",
        solicitante:"",
        sala:"",
        dataInicial:"",
        dataFinal:"",
        termos: false
    });

    const router = useRouter()

    // const [termos, setTermos] = useState(false);
    
    const [mensagem, setMensagem] = useState("");
    const [tipo, setTipo] = useState("");
    const [ativo, setAtivo] = useState(false);

    // const [mensagem, setMensagem] = useState({
    //     texto:"",
    //     tipo:"",
    //     ativo: false
    // });


    async function cadastrarReserva(e){

        e.preventDefault()
        
        //Validações
        if (reserva.dataInicial > reserva.dataFinal ) {
            setMensagem("Data Inicial maior que Data Final!")
            setTipo("warning")
            setAtivo(true)

            // setMensagem({
            //     texto: "Data Inicial maior que Data Final!",
            //     tipo: "warning",
            //     ativo: true
            // })
            return
        }

        if (reserva.termos == false) {
            setMensagem("Concorde com os termos para continuar!")
            setTipo("warning")
            setAtivo(true)

            // setMensagem({
            //     texto: "Concorde com os termos para continuar!",
            //     tipo: "warning",
            //     ativo: true
            // })
            return
        }

        //Gravação no Banco
        axios.post('http://localhost:3001/reservas', reserva)
            .then(resultado => {
                console.log(resultado.data);
                setMensagem("Agendamento realizado com sucesso!")
                setTipo("success")
                setAtivo(true)

                // setMensagem({
                //     texto: "Agendamento realizado com sucesso!",
                //     tipo: "success",
                //     ativo: true
                // })
                
                window.location.reload(); //Atualizar a página para listarReservar
                
                limparReserva();

            })
            .catch(error => {
                // console.log(error);
                setMensagem("Falha ao realizar agendamento!")
                setTipo("warning")
                setAtivo(true)

                // setMensagem({
                //     texto: "Falha ao realizar agendamento!",
                //     tipo: "warning",
                //     ativo: true
                // })
            })

        //Limpar o Formulário
        function limparReserva(){
            setReserva({
                descricao:"",
                solicitante:"",
                sala:"",
                dataInicial:"",
                dataFinal:"",
                termos: false
            });
        }
    }

    return(
        <>
        <div className={styles.bodyFormulario}>
            
            <div className={styles.bodyFormTitulo}>
                <h3>Reservar sala</h3>
            </div>

            <Mensagem
                // texto={`${mensagem.texto}`}
                // tipo={`${mensagem.tipo}`}
                // ativo={`${mensagem.ativo}`}

                texto={`${mensagem}`}
                tipo={`${tipo}`}
                ativo={`${ativo}`}
            />
            
            <form onSubmit={e => cadastrarReserva(e)}>
                <div className={styles.bodyFormInfo}>
                    <div className={styles.inputs}>
                        <Label>Descrição</Label>
                        <TextArea id='descricao' name='descricao' type='text' required value={reserva.descricao}
                            onChange={e => setReserva({...reserva, descricao: e.target.value})}
                        />
                    </div>

                    <div className={styles.inputs}>
                        <Label>Solicitante</Label>
                        <Input id='solicitante' name='solicitante' type='text' required value={reserva.solicitante}
                            onChange={e => setReserva({...reserva, solicitante: e.target.value})}
                        />
                    </div>

                    <div className={styles.inputs}>
                        <Label>Sala</Label>
                        <Select id='datainicial' name='datainicial' type='datetime-local' required value={reserva.sala}
                            onChange={e => setReserva({...reserva, sala: e.target.value})}
                        >
                            <option value='Bloco A'>Bloco A - Laboratório Informática</option>
                            <option value='Bloco B'>Bloco B - Laboratório Matematica</option>
                            <option value='Bloco C'>Bloco C - Laboratório Arquitetura</option>
                            <option value='Bloco D'>Bloco D - Laboratório Engenharia</option>
                        </Select>
                    </div>

                    <div className={styles.inputs}>
                        <Label>Início</Label>
                        <Input id='datainicial' name='datainicial' type='datetime-local' required value={reserva.dataInicial}
                            onChange={e => setReserva({...reserva, dataInicial: e.target.value})}
                        />
                    </div>

                    <div className={styles.inputs}>
                        <Label>Fim</Label>
                        <Input id='datafinal' name='datafinal' type='datetime-local' required value={reserva.dataFinal}
                            onChange={e => setReserva({...reserva, dataFinal: e.target.value})}
                        />
                    </div>

                    <div className={styles.inputs}>
                        <Label>
                            <input id='termos' name='termos' type='checkbox' checked={reserva.termos}
                                onChange={e => setReserva({...reserva, termos: e.target.checked})}
                                // onChange={(e) => setTermos(e.target.checked)}
                            />
                            Concordo com os termos?
                        </Label>
                    </div>

                    <div className={styles.inputs}>
                        <div className={styles.botao}>
                            <Button>
                                Reservar Sala
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        </>
    )
}