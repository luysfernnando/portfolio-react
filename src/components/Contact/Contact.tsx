import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>
          Se você viu o meu potencial ou quer conversar comigo, não exite em me
          mandar uma mensagem.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:contato@luysfernnando.com">
            contato@luysfernnando.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Telefone" />
          <a href="https://wa.me/5562991624471?text=Ol%C3%A1%20Luys%2C%20tenho%20algo%20pra%20falar%20sobre%20o%20desenvolvimento%20de%20um%20Site%20ou%20App!">
            (62) 99162-4471
          </a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
