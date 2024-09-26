const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Tendo em vista que a medicina no Paraguai é um assunto muito comentado no Brasil, diga-nos a sua opinião geral: você preferiria fazer medicina no Paraguai ou no Brasil?",
        alternativas: [
            {
                texto: "No Paraguai."
            },
            {
                texto: "No Brasil."
            }
        ]
    },
    {
        enunciado: "Você acha que a acesibilidade da faculdade de medicina no Brasil, prevalece sobre o custo-benefício do Paraguai?",
        alternativas: [
            {
                texto: "Sim, no Brasil é melhor para estudos e distancia de parentes, pois fica mais perto."
            },
            {
                texto: "Não, o custo-benefício é melhor, visto que a qualidade demonstra ser a mesma para estudo."
            }
        ]
    },
    {
        enunciado: "Na sua opinião, você acredita que os desafios enfrentados em estudar medicina no Paraguai são similares ou distinto de estudar no Brasil. (Ex: morar sozinho, se adaptar, linguagem, etc.)",
        alternativas: [
            {
                texto: "Similares."
            },
            {
                texto: "Distintos"
            }
        ]
    },
    {
        enunciado: "Você acredita que o mais avançado em questão de tecnologia e qualidade no estudo da medicina seria o Brasil ou o Paraguai?",
        alternativas: [
            {
                texto: "Brasil."
            },
            {
                texto: "Paraguai"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();