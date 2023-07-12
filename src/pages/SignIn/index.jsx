import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoImg from '../../assets/logo-food-explorer.svg';

import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { SignIn } = useAuth();

  function handleSignIn() {
    SignIn({ email, password })
  }

  return(
    <Container>
      <img src={logoImg} />

      <Form>
        <h1>Faça login</h1>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input 
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  );
}