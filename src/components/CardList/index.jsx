import styles from "./styles.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CardList({}){

    const [evento, setEvento] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/eventos')
          .then(resultado => setEvento(resultado.data))
      }, [])

    function formatarData(data) {
        if (typeof data === 'string') {
            const [ano, mes, dia] = data.split('-');
            return `${dia}/${mes}/${ano}`;
        } else {
            return data;
        }
    }

    return(
        <>
        <div className={styles.cardList}>
            {evento.map(e =>(
                <Card
                    // key={e.id}
                    id={e.id}
                    imagem={e.imagem}
                    titulo={e.titulo}
                    descricao={e.descricao}
                    local={e.local}
                    dataInicial={formatarData(e.dataInicial)}
                    dataFinal={formatarData(e.dataFinal)}
                />
            ))}
        </div>
        </>
    )
}