import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código" 
                    valor={id}
                    className="mb-4"
                />
            ) : false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-4">
                <Botao clearClass className={`
                    bg-gradient-to-r from-blue-400 to-blue-700
                    text-white px-4 py-2 rounded-md mb-4 mr-2`}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao clearClass className={`
                    bg-gradient-to-r from-gray-400 to-gray-700
                    text-white px-4 py-2 rounded-md mb-4`}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}