import "./Eventos.css"

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import type { Evento } from "../../types/api";
import { eventoService } from "../../services/eventPlusService";
import CardEvento from "../../components/cardEvento/CardEvento";

function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([])
    const [data, setData] = useState<Date>(new Date())

    useEffect(() => {
        async function carregar() {
            const dados = await eventoService.listar();

            setEventos(dados);

          
        }
          void carregar();
        // const timerId = setInterval(() => {
        //     setData(new Date());

        // }, 1000)

        // return () => {
        //     clearInterval(timerId);
        // };
    }, [])

    return (
        <>
            <Header />
            <main className="pagina-eventos">
                <h1>Catálogo de Eventos</h1>
                <div className="grade-eventos">
                    {eventos.map((evento) => (
                        <CardEvento
                            key={evento.idEvento}
                            id={evento.idEvento}
                            imagem={evento.imageUrl}
                            categoria={evento.idTipoEventoNavigation?.titulo}
                            titulo={evento.nome}
                            descricao={evento.descricao} />

                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Eventos;