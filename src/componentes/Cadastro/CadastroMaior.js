import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Genero from "../Genero/Genero.js"
import "./CadastroMaior.scss";
import Botao from "../Botao/Botao";

const CadastroMaior = () => {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [contato, setContato] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const salvarMaiorDeDezoito = (event) =>{
    event.preventDefault();

    fetch('',{
      method: 'POST',
      body:JSON.stringify({
        nome: nome,
        idade: idade,
        cpf: cpf,
        cep: cep,
        email: email,
        senha: senha,
      }),
      headers:{
        'Content-Type': 'application/json'
        }
    }).then( value => {
      return value.json()
    }).then(value => {
      if(value.id) {
        alert('Doador criado com sucesso!');
        
      } else{
        alert('Erro ao cadastrar!')
      }
      setNome("");
      setIdade("");
      setCpf("");
      setCep("");
      setEmail("");
      setSenha("");
    })
  };


  return (
    <div className="CadastroMaior">
      <h1>Faça seu Cadastro</h1>
    
      <form onSubmit={salvarMaiorDeDezoito}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          atualizarState={setNome}
        />
         <Input
          value={idade}
          type="text"
          label="Idade"
          placeholder="Digite sua idade"
          atualizarState={setIdade}
        />
         <Input
          value={cpf}
          type="text"
          label="CPF"
          placeholder="Digite seu cpf"
          atualizarState={setCpf}
        />
         <Input
          value={cep}
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          atualizarState={setCep}
        />
        <Genero/>
         <Input
          value={contato}
          type="text"
          label="Celular"
          placeholder="Digite o número do seu celular"
          atualizarState={setContato}
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

export default CadastroMaior;
