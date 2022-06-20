import { useState } from "react"
import Cliente from "../../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 34, '2'),
    new Cliente('Carlos', 34, '3'),
    new Cliente('Pedro', 34, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir.... ${cliente.nome}`)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500  to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao clearClass className={`
                bg-gradient-to-r from-green-400 to-green-700
                text-white px-4 py-2 rounded-md mb-4
              `}        
              >Novo Cliente</Botao>
            </div>

            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}/>
          </>
        ) : (
          <Formulario  cliente={clientes[2]}/>
        )}
      </Layout>
    </div>
  )
}
 