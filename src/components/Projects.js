import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dicasgit.gif";
import projImg2 from "../assets/img/meudiario.gif";
import projImg3 from "../assets/img/meuportifolio.gif";
import projImg4 from "../assets/img/todolist2.gif"
import projImg5 from "../assets/img/rickandmorty.gif"
import projImg6 from "../assets/img/cronometro.gif"
import projImg7 from "../assets/img/calculadora.png"
import projImg8 from "../assets/img/telalogin.png"
import projImg9 from "../assets/img/relogioreact.png"
import projImg10 from "../assets/img/json.png"
import projImg11 from "../assets/img/clone-instagram.png"
import projImg12 from "../assets/img/contagemregressiva.png" 
import projImg13 from "../assets/img/slidshowcartoon.gif"
import projImg14 from "../assets/img/formularioresponsivo.gif"
import projImg15 from "../assets/img/paginação.gif"
import projImg16 from "../assets/img/horadeaventura.gif"
import projImg17 from "../assets/img/jogodacobrinha.gif"
import projImg18 from "../assets/img/jogoregate.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dicas Git",
      description: "site para aprender sobre o Git",
      imgUrl: projImg1,
    },
    {
      title: "Meu Diario na Reprograma",
      description: "Meu primeiro projeto em React",
      imgUrl: projImg2,
    },
    {
      title: "Meu Portifólio na Reprograma",
      description: "Site em React com meus projetos na {Reprograma}",
      imgUrl: projImg3,
    },
    {
      title: "Todo-List",
      description: "Lista de tarefas",
      imgUrl: projImg4,
    },
    {
      title: "Projeto Api com React",
      description: "Projeto para estudar React usando Api",
      imgUrl: projImg5,
    },
    {
      title: "Cronometro Reverso",
      description: "Cronometro Reverso feito com JavaScript puro",
      imgUrl: projImg6,
    },
  ];
  const projectsPag2 = [
    {
      title: "Calculadora IMC",
      description: "Calculado IMC, onde você pode preencher os campos com seu nome, altura e peso e assim vai ser calculado e recebera uma mensagem.",
      imgUrl: projImg7,
    },
    {
      title: "Tela de Login",
      description: "tela de login feita somente com HTML e CSS",
      imgUrl: projImg8,
    },
    {
      title: "Relógio Digital",
      description: "Página para um relógio digital feito com React",
      imgUrl: projImg9,
    },
    {
      title: "Lista de filmes feito com JSON",
      description: "Para estudar JavaScript foi feito uma lista de filmes e séries feito com JSON",
      imgUrl: projImg10,
    },
    {
      title: "Clone da Tela de login do Instagram",
      description: "clone do Instagram feito com HTML e CSS.",
      imgUrl: projImg11,
    },
    {
      title: "Contagem Regressiva",
      description: "Contagem regressiva com o tema Rock in Rio , a contagem é utilizada para saber quantos dias e horas faltam para o evento, feito com JavaScript puro",
      imgUrl: projImg12,
    },
  ];
  const projectsPag3 = [
    {
      title: "Slideshow com o tema Cartoon Netwook",
      description: "Um slideshow com ações para retroceder e avanças",
      imgUrl: projImg13,
    },
    {
      title: "Tela de Login",
      description: "tela de login responsiva",
      imgUrl: projImg14,
    },
    {
      title: "Paginação",
      description: "Página para estudar como fazer paginação no JavaScript",
      imgUrl: projImg15,
    },
    {
      title: "Lista de filmes feito com JSON",
      description: "Para estudar JavaScript foi feito uma lista de filmes e séries feito com JSON",
      imgUrl: projImg16,
    },
    {
      title: "Jogo da Cobrinha",
      description: "Jogo da cobrinha para navegador",
      imgUrl: projImg17,
    },
    {
      title: "Jogo Resgate",
      description: "Um jogo simples e divertido o suficiente para qualquer pessoa,o objetivo do jogo é socorrer o amigo enquanto tenta defender ele de inimigos.Quando a energia do jogador acaba é Game Over.",
      imgUrl: projImg18,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Meus Projetos prontos desdo inicio dos meu estudos até hoje todos disponibilizados no meu GitHub. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                         projectsPag2.map((project, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                         projectsPag3.map((project, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
