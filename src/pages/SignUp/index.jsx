import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoImg from '../../assets/logo-food-explorer.svg';

import { Container, Form } from "./styles";
import { useState } from "react";
import { api } from "../../services";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    api.post("/users", { name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível realizar o cadastra.")
        }
      });
  }

  return(
    <Container>
      <img src={logoImg} />

      <Form>
        <h1>Crie sua conta</h1>

        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <Input 
            id="name"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input 
            type="text"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input 
            id="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
}