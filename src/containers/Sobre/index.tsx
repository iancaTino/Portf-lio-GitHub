import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GitHubSecao } from "./styles"


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá! Meu nome é Ianca Laurentino. Sou desenvolvedora frontend e apaixonada por tecnologia e design.
      Tenho experiência em HTML, CSS, JavaScript e React, e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
    </Paragrafo>

    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=cristianotobias&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cristianotobias&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
