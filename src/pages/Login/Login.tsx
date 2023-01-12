import { LogoStyle, MiniImg, ArameImg } from "./Styles";
import logo from "../../assets/logo.png";
import appleLogo from "../../assets/appleLogo.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import arame from "../../assets/aramedaagenda.png";
import { Link } from "react-router-dom";
import { FormEvent, useContext } from "react";
import useForm from "../../components/Hooks/useForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { UserContext } from "../../UserContext";
import Error from "../../components/Helper/Error";

export function Login() {
  const email = useForm("nome");
  const senha = useForm("senha");
  const { loginUser, error, loading } = useContext(UserContext);

  const payload = {
    email: email.value,
    senha: senha.value,
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    loginUser(payload);
  }

  return (
    <div id="box">
      <div>
        <ArameImg src={arame} alt="aramedaagenda" />
      </div>
      <div>
        <LogoStyle src={logo} alt="logo" />
        <div className="mt-2">
          <p>Entre em sua conta</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            placeholder="seunome@email.com"
            name="email"
            {...email}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="******"
            name="senha"
            {...senha}
          />
          {loading ? (
            <Button disabled type="submit" className="mt-4">
              Entrando...
            </Button>
          ) : (
            <Button type="submit" className="mt-4">
              Entrar
            </Button>
          )}
          <Error error={error} />
        </form>
        <div>
          <p className="mt-3">
            Ainda não tem conta? <br />{" "}
            <Link to="/cadastro">
              <b>Cadastre-se</b>
            </Link>
          </p>
        </div>
        <div className="mt-3">
          <hr />
          <p>Ou entre com:</p>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <MiniImg src={appleLogo} alt="applelogo" />
          <MiniImg src={googleLogo} alt="googlelogo" />
          <MiniImg src={facebookLogo} alt="facebooklogo" />
        </div>
      </div>
    </div>
  );
}
