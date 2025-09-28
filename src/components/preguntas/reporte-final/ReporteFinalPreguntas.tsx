'use client'
import { useMemo } from "react";
import { Leccion, preguntasFinales } from "@/src/interfaces";
import { HeaderReporteFinal } from "./HeaderReporteFinal";
import { EstadisticasReporteFinal } from "./EstadisticasReporteFinal";
import { DetalleReporteFinal } from "./DetalleReporteFinal";
import { AccionesReporteFinal } from "./AccionesReporteFinal";

interface Props {
    mostrarInforme: boolean;
    leccion: Leccion;
    respuestasPreguntas: preguntasFinales[]
}

export const ReporteFinalPreguntas = ({ mostrarInforme, leccion, respuestasPreguntas }: Props) => {
  const totalRespuestasCorrectas = useMemo(() => respuestasPreguntas.filter(respuestas => respuestas.esCorrecta), []);
  const totalRespuestasIncorrectas = useMemo(() => respuestasPreguntas.filter(respuestas => !respuestas.esCorrecta), []);

  return (
    <div className={`${mostrarInforme ? 'block' : 'hidden'} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8`}>
        <HeaderReporteFinal
            leccion={leccion}
            totalRespuestasCorrectas={totalRespuestasCorrectas.length}
            totalRespuestasPreguntas={respuestasPreguntas.length}
        />

        <EstadisticasReporteFinal
            totalRespuestasCorrectas={totalRespuestasCorrectas.length}
            totalRespuestasIncorrectas={totalRespuestasIncorrectas.length}
        />

        <DetalleReporteFinal resultadosRespuestas={respuestasPreguntas}/>

        <AccionesReporteFinal leccion={leccion}/>
    </div>
  );
}