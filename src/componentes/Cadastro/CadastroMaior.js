import React, {useState} from "react";
import Input from "../Input/Input";

import "./CadastroMaior.scss";

const CadastroMaior = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvarMaiorDeDezoito = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/responsavel/', {
      method: 'POST',
      body: JSON.stringify({
        nome_completo: nome,
        idade: idade,
        cpf: cpf,
        cep: cep,
        contato: contato,
        email: email,
        senha: senha,
      }),
      headers: {
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
       <div className="Texto">
            <h1>Faça seu Cadastro</h1>
       </div>
    
      <form onSubmit={salvarMaiorDeDezoito}>
        <Input
          value={nome}
          type="text"
          label="Nome completo"
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
          placeholder="Ex.: 00000000000"
          atualizarState={setCpf}
          obrigatorio
        />
         <Input
          value={cep}
          type="text"
          label="Cep"
          placeholder="Ex.: 00000000"
          atualizarState={setCep}
          obrigatorio
        />
       
         <Input
          value={contato}
          type="text"
          label="Celular"
          placeholder="Ex.: 00000000000"
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
      <input className="LALA" type="submit" value={"Cadastrar"} />
      </form>
    </div>
    );
  }

export default CadastroMaior;
