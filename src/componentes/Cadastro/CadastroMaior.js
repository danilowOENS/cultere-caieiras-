import React from "react";
import Input from "../Input/Input";
import Genero from "../Genero/Genero.js"
import "./CadastroMaior.scss";

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

    fetch('http://127.0.0.1:9000/responsavel/',{
      method: 'POST',
      body:JSON.stringify({
        nome: nome,
        idade: idade,
        cpf: cpf,
        cep: cep,
        contato:contato,
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
        alert('Cadastrado com sucesso!');
        
      } else{
        alert('Erro ao cadastrar!')
      }
      setNome("");
      setIdade("");
      setCpf("");
      setCep("");
      setContato("");
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
          obrigatorio
        />
         <Input
          value={idade}
          type="text"
          label="Idade"
          placeholder="Digite sua idade"
          atualizarState={setIdade}
          obrigatorio
        />
         <Input
          value={cpf}
          type="text"
          label="CPF"
          placeholder="Digite seu cpf"
          atualizarState={setCpf}
          obrigatorio
        />
         <Input
          value={cep}
          type="text"
          label="Cep"
          placeholder="Digite seu cep"
          atualizarState={setCep}
          obrigatorio
        />
       <Genero />
         <Input
          value={contato}
          type="text"
          label="Celular"
          placeholder="Digite o número do seu celular"
          atualizarState={setContato}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <input className="LALA" type='submit' value='Cadastrar' />
      </form>
    </div>
    );
  }

export default CadastroMaior;
