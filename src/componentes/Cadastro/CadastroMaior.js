import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import "./CadastroMaior.scss";
import Botao from "../Botao/Botao";

const CadastroMaior = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvarMaiorDeDezoito = (event) =>{
    event.preventDefault();


  useEffect(() => {
    fetch(``, {
      method: "GET"
    }).then(result => {
      return result.json()
    }).then(data => {
      console.log(data)
    }).catch(() => {
      console.error("Erroooooooou, internet ruim ou você que é")
    })
  }, [id])

  return (
    <div className="CadastroMaior">
      <h1>Faça seu Cadastro</h1>
      
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          atualizarState={setNome}
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
        />
        <Botao>Cadastrar</Botao>
      </form>
    </div>
    );
  }
}
export default CadastroMaior;
